const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const port = process.env.PORT || 5500;
app.listen(port);

app.get('/notify', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'olakalaweb@gmail.com',
      pass: 'futgumrvgnqnvaym',
    },
  });

  var mailOptions = {
    from: 'olakala',
    to: 'miticnemanja223@gmail.com',
    subject: `Rezervacija - ${new Date().toLocaleString('en-GB')}`,
    html: `Ime: ${req.query.name} <br> Datum : ${req.query.date} `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.send('Email sent: ' + info.response);
    }
  });
});
