import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { email } from './email'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { order } = req.body
  const { information, metal, design, userInformations, cardsImages } = order

  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'rafhajunior@hotmail.com',
      pass: '134679',
    },
  })

  const emailHTML = email(order)

  var mailOptions = {
    from: 'rafhajunior@hotmail.com',
    to: 'rafhael.c.junior@gmail.com',
    subject: `${userInformations.userName} - Pedido de cartão`,
    html: emailHTML,
    // attachments: [
    //   cardsImages.frontCardImage && {
    //     // filename: 'CartaoFrente.jpg',
    //     path: cardsImages.frontCardImage,
    //   },
    //   cardsImages.backCardImage && {
    //     // filename: 'CartaoTras.jpg',
    //     path: cardsImages.backCardImage,
    //   },
    //   design.file && { path: design.file },
    //   design.flag && { path: design.flag },
    // ],
  }

  console.log(emailHTML)

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
      return res.status(404)
    } else {
      console.log('caceta')
      return res.status(202).json('sucesso')
    }
  })

  // try {
  // } catch (err) {
  // } finally {
  // }
}
