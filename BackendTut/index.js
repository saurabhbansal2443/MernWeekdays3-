import express from "express";
import productRouter from "./Routes/product.routes.js";
import userRouter from "./Routes/user.routes.js";
import mongoose from "mongoose";

let server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json()); // server level middelware

server.use("/products", productRouter);
server.use("/users", userRouter);

async function dbConnect() {
  await mongoose.connect(
    "mongodb+srv://saurabhbansal:saurabh123@cluster0.fbuui.mongodb.net/"
  );
}

dbConnect()
  .then(() => {
    console.log(" Database connected ");

    server.listen(8080, () => {
      console.log(" server is running on port 8080", "http://localhost:8080");
    });
  })
  .catch((err) => {
    console.log(err);
  });
