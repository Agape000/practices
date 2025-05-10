require('dotenv').config()
const express = require('express');
const cors=require('cors');
const mongoose=require('mongoose');

const app=express();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('connected  to database'))
.catch((err)=>console.log('failed  to connect to database'))

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',require('./routes/authRoutes'))
app.use("/api/product" ,require("./routes/productRoutes"))

const PORT=process.env.PORT||2000
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})