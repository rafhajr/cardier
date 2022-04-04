import { prisma } from '@/lib/prisma'
import { validationToken } from '@/utils/validationToken'
import { NextApiRequest, NextApiResponse } from 'next'
async function entries(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, per_page = 10 } = req.body

  const entries = await prisma.entries.findMany({
    select: {
      id: true,
      oldQuantity: true,
      newQuantity: true,
      quantity: true,
      updatedAt: true,
      product: {
        select: {
          name: true,
        },
      },
      createdBy: {
        select: {
          name: true,
        },
      },
    },
    skip: (Number(page) - 1) * 10,
    take: Number(per_page),
  })

  const totalEntries = await prisma.entries.count()

  return res.status(200).json({ entries, totalEntries })
}

export default validationToken(entries)
