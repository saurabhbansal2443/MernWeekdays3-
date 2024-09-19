import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";

let auth = async (req, res, next) => {
  let token = req?.cookies?.Token;
  try {
    if (!token) {
      return res.send({ result: false, message: "not Authenticated " });
    }

    let TokenData = jwt.verify(token, process.env.SECRET_KEY);

    if (TokenData) {
      let userData = await User.findOne({ email: TokenData.email });

      req.user = userData;
      next();
    } else {
      return res.send({ result: false, message: "not Authenticated " });
    }
  } catch (err) {
    res.send({ result: false, message: err.message });
  }
};

export default auth;
