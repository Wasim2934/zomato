const mongoose = require("mongoose");
const env = require("./env");
 
async function connectDB() {
  const uri = env.MONGO_URI;
  if (!uri) { 
    throw new Error("MONGO_URI is not set. Copy .env.example to .env first.");
  }

  await mongoose.connect(uri, { autoIndex: false });

  console.log(
    `MongoDB connected: ${mongoose.connection.host}/${mongoose.connection.name}`,
  );
}

module.exports = connectDB;
