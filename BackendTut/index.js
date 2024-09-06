import express from "express";
import productRouter from "./Routes/product.routes.js"

let server = express();


server.use(express.urlencoded({ extended: true }));
server.use(express.json()); // server level middelware


server.use("/" , productRouter)

server.listen(8080, () => {
  console.log(" server is running on port 8080");
});
