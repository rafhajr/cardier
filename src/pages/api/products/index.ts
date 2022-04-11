/* eslint-disable indent */
import { prisma } from '@/lib/prisma'
import { validationToken } from '@/utils/validationToken'
import { NextApiRequest, NextApiResponse } from 'next'
async function products(req: NextApiRequest, res: NextApiResponse) {
  const { page, per_page = 10 } = req.body

  const products = page
    ? await prisma.product.findMany({
        select: {
          id: true,
          name: true,
          quantity: true,
        },
        skip: (Number(page) - 1) * 10,
        take: Number(per_page),
      })
    : await prisma.product.findMany({
        select: {
          id: true,
          name: true,
          quantity: true,
        },
      })

  const totalProducts = await prisma.product.count()

  return res.status(200).json({ products, totalProducts })
}

export default validationToken(products)
