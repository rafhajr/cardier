/* eslint-disable indent */
import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  quantity: Yup.string().required('Quantidade é obrigatório'),
})

async function products(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query

    switch (req.method) {
      case 'GET': {
        const product = await prisma.product.findFirst({
          where: {
            id: String(id),
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

      case 'PATCH': {
        const { name, quantity } = req.body

        await schema.validate(
          { name, quantity },
          {
            abortEarly: false,
          }
        )

        const updateProduct = await prisma.product.update({
          where: {
            id: String(id),
          },
          data: {
            name,
            quantity: Number(quantity),
          },
        })

        return res.status(202).json({ product: updateProduct })
      }

      case 'DELETE': {
        const deleteProduct = await prisma.product.delete({
          where: {
            id: String(id),
          },
        })

        return res.status(202).json({ product: deleteProduct })
      }

      default:
        return res.status(500).json({ message: 'method not allowed' })
    }
  } catch (err) {
    res.status(500).json({ err })
  }
}

// TODO ADICIONR PERMISSION
export default products
