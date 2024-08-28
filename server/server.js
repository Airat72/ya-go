const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const server = express();

server.use(cors());
server.use(express.static(__dirname + '/public'));
server.use(express.json());

server.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

server.post('/api/feedback', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'ya-go-it@mail.ru',
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const { name, phone, message } = req.body;

    await transporter.sendMail({
      from: 'ya-go-it@mail.ru',
      to: 'ya-go-it@mail.ru',
      subject: 'Тема письма',
      text: `${name} ${phone} ${message}`,
      html: `
        <p>${name}</p>
        <p>${phone}</p>
        <p>${message}</p>
      `,
    });

    return res.status(200).send({
      status: 200,
      message: 'Успешня отправка',
    });
  } catch (e) {
    return res.status(500).send({
      status: 500,
      message: 'Ошибка при запросе',
    });
  }
});

server.listen(3001, () => {
  console.log('listening on port 3001');
});