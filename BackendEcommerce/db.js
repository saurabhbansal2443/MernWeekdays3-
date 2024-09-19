import mongoose from "mongoose";

async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URI);
}

export default connectDB;
