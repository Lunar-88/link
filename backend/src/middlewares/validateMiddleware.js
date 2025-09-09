
// src/middlewares/validateMiddleware.js
const { body, validationResult } = require("express-validator");

// validation rules for creating/updating booking
const validateBooking = [
  body("customerName").notEmpty().withMessage("Customer name is required"),
  body("customerEmail").isEmail().withMessage("Valid email is required"),
  body("service").notEmpty().withMessage("Service is required"),
  body("date").isISO8601().toDate().withMessage("Valid booking date is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateBooking };
