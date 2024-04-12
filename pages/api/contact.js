import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.PASSWORD, 
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: `New message from ${name}`,
      text: message,
    });

    res.status(200).json({ status: 'Ok' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending email' });
  }
}

