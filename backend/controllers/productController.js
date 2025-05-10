const Product = require("../models/product.js")

exports.addProduct= async (req,res)=>{

try{
     const {name}=req.body
if (!name || name.trim() === '') {
  return res.status(400).json({ message: "Name is required" });
}

    const  productExists= await Product.findOne({name})
    if(productExists){
        return res.status(400).json({message:"product already exists"})
    }
     const product = new Product(
        {name}
     )

     await product.save();
     res.status(200).json({message:"inserted successfully"})

}
catch(error){
    console.log(error)
  res.status(500).json({message:"server error"})
}
}

exports.getAllProducts= async(req,res)=>{
try{
    const products= await Product.find();
    return res.status(200).json({message:"all product in", data:products})
}
catch(error){
    return res.status(500).json({message:"internal server error"})
}
}