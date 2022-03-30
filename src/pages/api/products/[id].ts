/* eslint-disable indent */
import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
async function products(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.body

    switch (req.method) {
      case 'GET': {
        const product = await prisma.product.findFirst({
          where: {
            id,
          },
          select: {
            id: true,
            name: true,
            quantity: true,
          },
        })

        if (!product) {
          return res.status(404).json({ message: 'Produto não encontrado' })
        }

        return res.status(200).json(product)
      }
    }
  } catch (err) {
    res.status(500).json({ err })
  }
}

export default products
