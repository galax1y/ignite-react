import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// localhost:3000/api/users

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { username, name } = req.body

  const userExists = await prisma.user.findUnique({ where: { username } })
  if (userExists)
    return res.status(400).json({ message: 'username is already taken' })

  const user = await prisma.user.create({ data: { name, username } })

  setCookie({ res }, '@ignitecall-galaxy:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days until cookie expiration
    path: '/register', // routes that can access this cookie
  })

  return res.status(201).json(user)
}
