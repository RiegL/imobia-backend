import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  async sendWelcomeEmail(to: string, name: string) {
    const mailOptions = {
      from: '"Imobia" <seuemail@gmail.com>',
      to,
      subject: 'Bem-vindo à Imobia!',
      html: `<h1>Olá, ${name}!</h1><p>Seja bem-vindo à Imobia. Estamos felizes em ter você conosco.</p>`,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
