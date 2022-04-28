import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { email } from './email'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { order } = req.body
  const { information, metal, design, userInformations, cardsImages } = order

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: 'pedidos@usecardier.com.br',
      pass: 'Use!Pedidos11',
    },
  })

  const emailHTML = email(order)

  var mailOptions = {
    from: 'pedidos@usecardier.com.br',
    to: 'contato@usecardier.com.br ',
    subject: `- Pedido de cartão - ${userInformations.userName} `,
    html: emailHTML,
    attachments: [
      cardsImages.frontCardImage && {
        // filename: 'CartaoFrente.jpg',
        path: cardsImages.frontCardImage,
      },
      cardsImages.backCardImage && {
        // filename: 'CartaoTras.jpg',
        path: cardsImages.backCardImage,
      },
    ],
  }
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
      return res.status(400).json(error)
    } else {
      // console.log('caceta')
      return res.status(202).json('sucesso')
    }
  })

  // try {
  // } catch (err) {
  // } finally {
  // }
}
