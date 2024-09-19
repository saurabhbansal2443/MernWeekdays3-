import express from "express";
import Auth from "../Middelwares/Auth.js"

import {signup , login , getUser , updateUser , replaceUser , deleteUser , logoutUser }  from "../Controllers/user.controller.js"

let Router = express.Router();

Router.post("/signup", signup)
  .post("/login", login)
  .get("/",Auth,  getUser)
  .patch("/update",Auth, updateUser)
  .put("/replace",Auth, replaceUser)
  .delete("/",Auth, deleteUser)
  .post("/logout",Auth, logoutUser);


  export default Router;    
