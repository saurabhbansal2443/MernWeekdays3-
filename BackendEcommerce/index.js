import express from "express";
import dbConnect from "./db.js";
import userRouter from "./Routes/user.route.js";

let server = express();

let PORT = 8000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/users", userRouter);

dbConnect()
  .then(() => {
    console.log(" DataBase connected ");
    server.listen(PORT, () => {
      console.log(" Sever is running on  ", `http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
