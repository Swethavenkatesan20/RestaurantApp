import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js"; // Import the Reservation model
import { sendReservationEmail } from "../services/emailService.js"; // Import the email service

const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;

  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    // Check if a reservation already exists for the same date and time
    const existingReservation = await Reservation.findOne({ date, time });
    
    if (existingReservation) {
      return next(new ErrorHandler("This time slot is already reserved!", 400));
    }

    // Create the reservation in the database
    const newReservation = await Reservation.create({ firstName, lastName, email, date, time, phone });
    
    // Send the confirmation email
    await sendReservationEmail(email, { firstName, lastName, date, time, phone });

    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
      reservation: newReservation
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};

export default send_reservation;
