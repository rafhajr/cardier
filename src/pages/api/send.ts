import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { order } = req.body

  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'rafhajunior@hotmail.com',
      pass: '134679',
    },
  })

  var mailOptions = {
    from: 'rafhajunior@hotmail.com',
    to: 'rafhael.c.junior@gmail.com',
    subject: 'Pedido de cartão',
    text: 'Olha q bonito',
    attachments: [
      { path: order.cardsImages.frontCardImage },
      { path: order.cardsImages.backCardImage },
    ],
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
      return res.status(404).json({ 'Meu pau': 'Nao ta sujo de coco' })
    } else {
      console.log('Email sent: ' + info.response)
      console.log('aeee putaaa')
      return res.status(202).json({ 'Meu pau': 'Ta sujo de coco' })
    }
  })

  // try {
  // } catch (err) {
  // } finally {
  // }
}
