import User from "../Models/user.model.js"


  
  let allUser = (req, res) => {
    
  }
  let getUser = (req, res) => {

  }

  let updateUser = (req, res)=> {}

  let replaceUser = (req, res) => {}  

  let signup = async (req, res) => {  // CreateUser 
     let data  = req.body ;  //{email , username , apssword }
    try{
     let newUser = new User( data  ); // documnet create 

     let dataBaseUser =await  newUser.save();

     res.status(201).json ( dataBaseUser)
    }catch(err){
      res.status(500).send(err.message )
    }
  }

  let login = (req, res) => {}  

  export {allUser , getUser , updateUser , replaceUser , signup , login }


  //createUser  signup --> login --> getUer ---> allUser --> updateUser --> replaceUser 
  