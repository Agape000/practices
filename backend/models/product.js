const mongoose = require("mongoose");


const product = new mongoose.Schema(
{
       name:{type:String, required:true }


},
{timestamps:true})

const Product= mongoose.model("product",product)
module.exports=Product