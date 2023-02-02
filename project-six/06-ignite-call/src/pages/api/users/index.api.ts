import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// localhost:3000/api/users

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // devemos definir melhor o método HTTP válido para essa API Route
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  // pegando os dados no request body
  const { username, name } = req.body

  // verifica na tabela user, nos campos únicos (que são o id e o username)
  // se o username passado no req.body já está sendo usado em alguma entrada
  const userExists = await prisma.user.findUnique({ where: { username } })

  // se sim, retornamos um erro ao usuário
  if (userExists)
    return res.status(400).json({ message: 'username is already taken' })

  // se não, criamos a entrada no banco de dados
  const user = await prisma.user.create({ data: { name, username } })

  // retornando mensagem de sucesso para o usuário
  return res.status(201).json(user)
}
