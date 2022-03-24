import { verify } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import { storageKey } from '../storageKey'

export function validationToken(req: NextApiRequest, res: NextApiResponse) {
  const token = req.cookies[storageKey('token')]

  try {
    verify(token, String(process.env.SECRET))
  } catch (err) {
    err.message === 'jwt must be provided' &&
      res.status(401).json({ message: 'Token ausente' })

    err.message === 'invalid signature' &&
      res.status(401).json({ message: 'Token inválido' })
  }
}
