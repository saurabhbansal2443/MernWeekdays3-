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
    res.send({message : "hello"})
};

let updateUser = (req, res) => {};

let replaceUser = (req, res) => {};

let deleteUser = (req, res) => {};

let logoutUser = (req, res) => {};

export {
  signup,
  login,
  getUser,
  updateUser,
  replaceUser,
  deleteUser,
  logoutUser,
};
