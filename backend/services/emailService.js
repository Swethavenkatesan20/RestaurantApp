import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' }); // Ensure this is included

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify(function(error, success) {
  if (error) {
    console.error('Error verifying transporter:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

export const sendReservationEmail = async (toEmail, reservationDetails) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: 'Reservation Confirmation',
    text: `Dear ${reservationDetails.firstName},

Thank you for booking a reservation at our restaurant. Here are your reservation details:

Date: ${reservationDetails.date}
Time: ${reservationDetails.time}
Name: ${reservationDetails.firstName} ${reservationDetails.lastName}
Phone: ${reservationDetails.phone}

We look forward to serving you!

Best regards,
Bharani's Delight`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
