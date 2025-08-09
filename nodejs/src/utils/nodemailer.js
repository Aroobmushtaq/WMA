const nodemailer = require('nodemailer');

// Create a transporter using Ethereal Email
let transporter;

nodemailer.createTestAccount((err, account) => {
  if (err) {
    console.error('Failed to create test account', err);
    return;
  }

  transporter = nodemailer.createTransport({
    host: account.smtp.host,
    port: account.smtp.port,
    secure: account.smtp.secure,
    auth: {
      user: account.user,
      pass: account.pass
    }
  });

  console.log('Ethereal test account created. Ready to send emails.');
});

// Function to send welcome email
async function sendWelcomeEmail(email, name) {
  if (!transporter) {
    throw new Error('Email transporter not initialized yet');
  }

  const mailOptions = {
    from: 'aroob@gmail.com',
    to: email,
    subject: 'Welcome!',
    text: `Hello ${name}, welcome to our platform!`
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('Email sent: ' + info.messageId);
  console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
  return nodemailer.getTestMessageUrl(info);
}

module.exports = { sendWelcomeEmail };
