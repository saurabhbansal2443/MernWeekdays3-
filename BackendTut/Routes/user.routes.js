import express from "express";
import {
  allUser,
  getUser,
  updateUser,
  replaceUser,
  signup,
  login,
} from "../Controllers/user.controller.js";

let Router = express.Router();

Router.get("/all", allUser)
  .get("/", getUser)
  .post("/signup", signup)
  .patch("/update", updateUser)
  .put("/replace", replaceUser)
  .post("/login", login);

export default Router;
