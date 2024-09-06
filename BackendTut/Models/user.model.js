import mongoose from "mongoose";

let { Schema , model  } = mongoose ; 

let UserSchema = new Schema({
    userName : {type : String } , 
    email : {type : String , required : true  , unique : true } ,
    password : {type : String , required : true , min : [6 , "Password is too short"]},
    phoneNumber : {type : Number },
    address : { type : [String ]}
})


let User = model("User" , UserSchema);

export default User;