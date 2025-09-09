
// src/app.js
const express = require("express");
const bookingRoutes = require("./routes/bookingRoutes");
const errorHandler = require("./middlewares/errorMiddleware"); // ✅ import it

const app = express();

app.use(express.json()); // parse JSON bodies

// Mount booking routes
app.use("/api/bookings", bookingRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Booking API is running...");
});

// Not found middleware (optional)
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use(errorHandler);

module.exports = app;
