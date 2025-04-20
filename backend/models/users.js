const mongoose=require('mongoose');


const user  =  new mongoose.Schema({
    name:{type:String, required:true},
    phone:{type:Number,required:true},
    Email:{type:String,required:true},
    password:{type:String,required:true}

})

const users= mongoose.model('user',user);

module.exports=users;