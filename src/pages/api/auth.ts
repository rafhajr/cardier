import { prisma } from '@/lib/prisma'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  email: Yup.string().required('email is required'),
  password: Yup.string().required('password is required'),
})

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  try {
    await schema.validate(
      { email, password },
      {
        abortEarly: false,
      }
    )

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    })

    if (!user || !(await compare(password, user?.password)))
      return res.status(401).json({ message: 'Usário ou senha incorretos' })

    const authUser = {
      name: user.name,
      email: user.email,
      id: user.id,
    }

    const token = jwt.sign({ id: user.id }, String(process.env.SECRET), {
      expiresIn: '1d',
    })

    return res.status(200).json({ token, user: authUser })
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      return res.status(400).json(err.errors)
    }

    return res.status(500).json(err)
  } finally {
    prisma.$disconnect()
  }
}
