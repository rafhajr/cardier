import { prisma } from '@/lib/prisma'
import { validationToken } from '@/utils/validationToken'
import { NextApiRequest, NextApiResponse } from 'next'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  quantity: Yup.string().required('Quantidade é obrigatório'),
})

async function createProducts(req: NextApiRequest, res: NextApiResponse) {
  const { name, quantity } = req.body

  try {
    await schema.validate(
      { name, quantity },
      {
        abortEarly: false,
      }
    )

    const product = await prisma.product.findFirst({
      where: {
        name: name,
      },
    })

    if (product)
      return res.status(400).json({ message: 'Produto já cadastrado' })

    await prisma.product.createMany({
      data: {
        name: name,
        quantity: Number(quantity),
      },
    })

    return res.status(201).json({})
  } catch (err) {
    res.status(500).json(err)
  } finally {
    prisma.$disconnect()
  }
}

export default validationToken(createProducts)
