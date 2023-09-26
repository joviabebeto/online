import mongoose from "mongoose";

const userSchemas = new mongoose.Schema({
userName:{
type:String,
required:true,
},
  email:{
    type:String,
    required:true,
    
  },
  password:{
    type:String,
    required:true
  },
  confirmPassword:{
    type:String
  },
  role:{
    type:String,
    enum:["user","admin"],
    default:"user"

  },
  signAt:{
    type:Date,
    default:Date.now()
  }
});

const User=mongoose.model("User",userSchemas)
export default User