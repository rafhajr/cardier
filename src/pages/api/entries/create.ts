import { prisma } from '@/lib/prisma'
import { validationToken } from '@/utils/validationToken'
import { NextApiRequest, NextApiResponse } from 'next'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  productId: Yup.string().required('Produto é obrigatório'),
  userId: Yup.string().required('Usuário é obrigatório'),
  quantity: Yup.string().required('Quantidade é obrigatório'),
})

async function createEntry(req: NextApiRequest, res: NextApiResponse) {
  const { productId, userId, quantity } = req.body

  try {
    await schema.validate(
      { productId, userId, quantity },
      {
        abortEarly: false,
      }
    )

    const product = await prisma.product.findFirst({
      where: {
        id: productId,
      },
      select: {
        quantity: true,
      },
    })

    if (!product)
      return res.status(404).json({ message: 'Produto não encontrado' })

    const newQuantity = Number(quantity) + Number(product.quantity)

    await prisma.product.updateMany({
      where: {
        id: productId,
      },
      data: {
        quantity: newQuantity,
      },
    })

    await prisma.entries.createMany({
      data: {
        productId: productId,
        createdById: userId,
        oldQuantity: Number(product.quantity),
        quantity: Number(quantity),
        newQuantity,
      },
    })

    return res.status(201).json({})
  } catch (err) {
    res.status(500).json(err)
  } finally {
    prisma.$disconnect()
  }
}

export default validationToken(createEntry)
