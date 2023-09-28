import mongoose from "mongoose";

const priceSchema=new mongoose.Schema({
  stableprice:{
    type:String,

  }, 
  unstableprice:{
    type:String
  } 

})
const price=mongoose.model("price",priceSchema)
export default price