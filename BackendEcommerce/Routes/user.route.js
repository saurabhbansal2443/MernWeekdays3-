import express from "express";

let Router = express.Router();

Router.post("/signup", signup)
  .post("/login", login)
  .get("/", getUser)
  .patch("/update", updateUser)
  .put("/replace", replaceUser)
  .delete("/", deleteUser)
  .post("/logout", logoutUser);


  export default Router;    
