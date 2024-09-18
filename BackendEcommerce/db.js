import mongoose from "mongoose";

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://saurabhbansal:saurabh123@cluster0.fbuui.mongodb.net/"
  );
}

export default connectDB;
