import express from "express";
import dbConnect from "./db.js";
import userRouter from "./Routes/user.route.js";
import cookieParser from "cookie-parser";
import  cors from "cors"
import 'dotenv/config'

let server = express();

let PORT = process.env.PORT || 8080;

console.log(PORT)

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser())
server.use(cors({
    origin : "http://localhost:5175" ,
    credentials: true
}))

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
