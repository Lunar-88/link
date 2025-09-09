
require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3000;

let server;

async function startServer() {
  try {
    // Start server
    server = app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });

    // Handle unhandled promise rejections
    process.on("unhandledRejection", (err) => {
      console.error("❌ Unhandled Rejection:", err);
      shutdown();
    });

    // Handle uncaught exceptions
    process.on("uncaughtException", (err) => {
      console.error("❌ Uncaught Exception:", err);
      shutdown();
    });

    // Handle termination signals
    process.on("SIGINT", shutdown);  // Ctrl+C
    process.on("SIGTERM", shutdown); // Hosting providers
  } catch (err) {
    console.error("❌ Error starting server:", err);
    process.exit(1);
  }
}

function shutdown() {
  console.log("🛑 Shutting down server...");
  if (server) {
    server.close(() => {
      console.log("✅ Server closed");
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
}

startServer();
