
// src/controllers/bookingController.js
const Booking = require("../models/Booking");

// Create a booking
const createBooking = async (req, res, next) => {
  try {
    const { customerName, customerEmail, phone } = req.body;

    if (!customerName || !customerEmail) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    const booking = await Booking.create({ customerName, customerEmail, phone });
    res.status(201).json(booking);
  } catch (err) {
    next(err);
  }
};

// Get all bookings
const getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    next(err);
  }
};

// Get a single booking by ID
const getBookingById = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json(booking);
  } catch (err) {
    next(err);
  }
};

// Update a booking
const updateBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.json(booking);
  } catch (err) {
    next(err);
  }
};

// Delete a booking
const deleteBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
};

