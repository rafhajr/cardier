import { prisma } from '@/lib/prisma'
import { validationToken } from '@/utils/validationToken'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  validationToken(req, res)

  try {
    const users = await prisma.user.findMany()

    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err)
  }
}
