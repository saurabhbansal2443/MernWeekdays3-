import User from "../Models/user.model.js"


  
  let allUser = (req, res) => {
    
  }
  let getUser = (req, res) => {
    res.send({data : "data is "})
  }

  let updateUser = (req, res)=> {}

  let replaceUser = (req, res) => {}  

  let signup = async (req, res) => {  // CreateUser 
  }

  let login = (req, res) => {}  

  export {allUser , getUser , updateUser , replaceUser , signup , login }


  //createUser  signup --> login --> getUer ---> allUser --> updateUser --> replaceUser 
  