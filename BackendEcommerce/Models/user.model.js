import mongoose from "mongoose";

let { Schema , model } = mongoose;

let userSchema = new Schema({
    userName : {type : String , min : [2 , 'invalid userName ']},
    email : {type : String , unique : true  , required : true},
    password : {type : String , required : true , min : [6 , " password is short "]},
    phoneNumber : {type : Number , unique : true } 
});

let User = model('User' , userSchema);

export default User;
