import { verify } from 'jsonwebtoken'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { storageKey } from '../storageKey'

export const validationToken =
  (handler: NextApiHandler) => (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies[storageKey('token')]

    try {
      verify(token, String(process.env.SECRET))

      return handler(req, res)
    } catch (err) {
      err.message === 'jwt must be provided' &&
        res.status(401).json({ message: 'Token ausente' })

      err.message === 'invalid signature' &&
        res.status(401).json({ message: 'Token inválido' })

      return res.status(500).json(err)
    }
  }
