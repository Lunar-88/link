
// src/routes/bookingRoutes.js
const express = require("express");
const {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

const router = express.Router();

/**
 * @route   POST /api/bookings
 * @desc    Create a new booking
 */
router.post("/", createBooking);

/**
 * @route   GET /api/bookings
 * @desc    Get all bookings
 */
router.get("/", getBookings);

/**
 * @route   GET /api/bookings/:id
 * @desc    Get a single booking by ID
 */
router.get("/:id", getBookingById);

/**
 * @route   PUT /api/bookings/:id
 * @desc    Update a booking by ID
 */
router.put("/:id", updateBooking);

/**
 * @route   DELETE /api/bookings/:id
 * @desc    Delete a booking by ID
 */
router.delete("/:id", deleteBooking);

module.exports = router;
