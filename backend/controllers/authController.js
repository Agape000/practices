const { json } = require("express");
const user = require("../models/users");
const bcrypt = require("bcryptjs");


exports.register = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    if (!name || !phone || !email || !password) {
      res.status(409).json({ message: "all fields are required" });
    }
    const userExists = await user.findOne({ email });
    if (userExists) {
      res.status(409).json({ message: "user exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const registerUser = new user({
      name,
      phone,
      email,
      password: hashedPassword,
    });
    await registerUser.save();
    res.status(200).json({ message: "registered succussfully!!!" });
  } catch (err) {
    console.log(err);
    res.status(500), json({ message: "server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { phone, email, password } = req.body;
    if (!password || (!phone && !email )) {
        res.status(409).json({ message: "email or phone and password are required" });
      }
    const userExists=await user.find({$or:[{email},{phone}]});
    if(!userExists){
        res.status(409).json({message:"user not found"});
    }

    const  isMatch=  await bcrypt.compare(password,userExists.password);
    if(!isMatch){
        res.status(409).json({message:"password those not match"})
    }
    res.status(200),json({message:"login successfully"})
  } catch {}
};
