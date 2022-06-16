import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4232f8782d5e46",
    pass: "77e439388db8bf"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData){

  
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com',
    to: 'Yan Sena <dsena302@gmail.com>',
    subject,
    html: body
  })
  };
}