import express from "express";
import fs from "fs";
let htmlData = fs.readFileSync("./basics.html", "utf8");
let aboutData = fs.readFileSync("./about.html", "utf8");
let apiData = JSON.parse(fs.readFileSync("./DataBase.js", "utf8"));

let server = express();

let auth = (req, res, next) => {
  //middelware   // Cutsome middelware

  if (req.params.password == "1234") {
    next();
  } else {
    res.send(" user not authenticated ");
  }
};

// inbuilt middelware
// serverlevel middelware

server.get("/", (req, res) => {
  res.send(htmlData);
});

server.get("/products/:password", auth, (req, res) => {
  // route level middelware
  res.json(apiData);
});

server.get("/products/:id", (req, res) => {
  let pid = +req.params.id;
  let objData = apiData.find((obj) => obj.id == pid);
  res.json(objData);
});
server.get("/prod/:item?", (req, res) => {
  let pid = req.query;
  console.log(pid);
  res.json("end");
});

server.listen(8080, () => {
  console.log(" server is running on port 8080");
});
