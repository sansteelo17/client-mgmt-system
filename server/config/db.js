const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  if (conn) {
    console.log("Mongoose connected");
  }
};

module.exports = connectDB;
