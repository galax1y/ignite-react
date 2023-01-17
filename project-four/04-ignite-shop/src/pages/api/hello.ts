import { NextApiRequest, NextApiResponse } from 'next'

// código server side, > não é pra causar problemas de segurança <
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.json({ message: 'Hello World' })
}
