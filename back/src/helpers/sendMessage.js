import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'samvelavagyan91@gmail.com',
      pass: 'Avagyan2002',
    },
    from: 'Mailer Test <samvelavagyan91@gmail.com>',
  },
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

export default mailer;