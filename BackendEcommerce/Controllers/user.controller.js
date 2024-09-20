import User from "../Models/user.model.js";

let cookieOption = {
  httpOnly: true,
  secure: true,
  sameSite: "None",
};

let signup = async (req, res) => {
  let { email } = req.body; //{email , password , userName }

  try {
    let existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.send({
        result: false,
        message: "User already exist",
        data: existingUser,
      });
    }

    let newUser = User(req.body);

    let token = await newUser.generateToken();

    let newUserData = await newUser.save();

    return res.cookie("Token", token, cookieOption).send({
      result: true,
      message: "User created successfully ",
      data: newUserData,
    });
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

let login = async (req, res) => {
  let { email, password } = req.body; //{email , password }

  try {
    let existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      return res.send({
        result: false,
        message: "User not exist",
      });
    }

    let checkPassword = await existingUser.comparePassword(password);

    if (checkPassword == true) {
      let token = existingUser.generateToken();

      return res.cookie("Token", token, cookieOption).send({
        result: true,
        message: "User login successfully ",
        data: existingUser,
      });
    } else {
      return res.send({ result: false, message: "Password incorrect" });
    }
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

let getUser = (req, res) => {
    if(!req?.user ){
      return res.send({result : false , message : 'not authenticated ' })
    }else{
      return res.send({result : true , message : "user " , data : req.user })
    }
};

let updateUser = async (req, res) => {
  if(!req?.user ){
    return res.send({result : false , message : 'not authenticated ' })
  }else{
    try{
      let userData = req.user ; 
      let data = req.body ; 
      let updatedData = await User.findByIdAndUpdate( userData._id , data , {new : true } );
      return res.send({result : true , message : "user updated succesfully " , data : updatedData })
    }catch(err){
      return res.send({result : false  , message: err.message})
    }
  }
};

let replaceUser =async  (req, res) => {
  if(!req?.user ){
    return res.send({result : false , message : 'not authenticated ' })
  }else{
    try{
      let userData = req.user ; 
      let data = req.body ; 
      let replacedData = await User.findOneAndReplace( {_id : userData._id} , {...data , email : userData.email , password : userData.password} , {new : true } );
      return res.send({result : true , message : "user replaced succesfully " , data : replacedData })
    }catch(err){
      return res.send({result : false  , message: err.message})
    }
  }
};

let deleteUser = async (req, res) => {
  if(!req?.user ){
    return res.send({result : false , message : 'not authenticated ' })
  }else{
    try{
      let userData = req.user ;
      let deleteData = await User.findByIdAndDelete( userData._id );
      return res.clearCookie("Token").send({result : true  , message : "Deleted and logout Sucessfully " , data : deleteData});
    }catch(err){
      return res.send({result : false  , message: err.message})
    }
  }
};

let logoutUser = (req, res) => {
  if(!req?.user ){
    return res.send({result : false , message : 'not authenticated ' })
  }else{
    try{
      return res.clearCookie("Token").send({result : true  , message : "logout Sucessfully "})
    }catch(err){
      return res.send({result : false  , message: err.message})
    }
  }
};

export {
  signup,
  login,
  getUser,
  updateUser,
  replaceUser,
  deleteUser,
  logoutUser,
};
