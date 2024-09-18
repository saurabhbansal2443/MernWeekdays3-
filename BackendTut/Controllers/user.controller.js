import User from "../Models/user.model.js";
import bcrypt from "bcrypt";

let allUser = async (req, res) => {
  let users = await User.find();

  res.send({ result: true, message: "user found  ", data: users });
};
let getUser = async (req, res) => {
  let { email } = req.body;

  let user = await User.findOne({ email: email });

  res.send({ result: true, message: "user found  ", data: user });
};

let updateUser = async (req, res) => {
  let updateData = req.body; //{ email , data }

  let updatedUser = await User.findOneAndUpdate(
    { email: updateData.email },
    updateData,
    { new: true }
  );
  console.log(updatedUser);
  res.send({ result: true, message: "user found  ", data: updatedUser });
};

let replaceUser = async (req, res) => {
  let updateData = req.body; //{ email , data }

  let updatedUser = await User.findOneAndReplace(
    { email: updateData.email },
    updateData,
    { new: true }
  );
  // console.log(updatedUser)
  res.send({ result: true, message: "user found  ", data: updatedUser });
};

let signup = async (req, res) => {
  // createUser
  let { email, userName, password } = req.body; //{userName , email , password }
  // 1) is the user already exists
  try {
    let existingUser = await User.findOne({ email: email });
    if (existingUser) {
      // if user already presert
      return res.send({
        result: false,
        message: " user Already Exist ",
        data: existingUser,
      });
    }
    // create New user

    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let newUser = User({ email, userName, password: hashedPassword });

    let dbUser = await newUser.save();

    return res.send({ result: true, message: "user created ", data: dbUser });
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

let login = async (req, res) => {
  // createUser
  let { email, password } = req.body; //{userName , , password }
  // 1) is the user already exists
  try {
    let existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      // if user already presert
      return res.send({
        result: false,
        message: " user not found ",
      });
    }
    // check Password

    let passwordResult = await bcrypt.compare(password, existingUser.password);

    if (passwordResult == true) {
      return res.send({
        result: true,
        message: "login sucess  ",
        data: existingUser,
      });
    } else {
      return res.send({ result: false, message: "password incorrect " });
    }
  } catch (err) {
    return res.send({ result: false, message: err.message });
  }
};

export { allUser, getUser, updateUser, replaceUser, signup, login };

//createUser  signup --> login --> getUer ---> allUser --> updateUser --> replaceUser
