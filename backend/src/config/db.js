
const mongoose = require('mongoose');

async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`🚀 MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`❌MongoDB connection Error: ${err.message}`);
        process.exit(1); //stop the app if DB fails
    }
}

module.exports = connectDB;