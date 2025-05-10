import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useState } from 'react'
import axios from 'axios'

const Product = () => {
        const [productName, setProductName]=useState("");
        const [message, setMessage]= useState("");
  const handleSubmit =async(e)=>{
   e.preventDefault();
   try{
      const response =await axios.post("http://localhost:2222/api/product", {name:productName})
      if(response.status=200){
        setMessage("product added suceessfully");
        setProductName('')
      }
   }
   catch(error){
     console.log(error);
     setMessage("failed to insert");
   }
  }      
  return (
   <>
   <Navbar />
   <div className=" text-3xl text-center pt-25">
    <h1>Add Product </h1>
   </div>
   <form onSubmit={handleSubmit}>
   <div className="flex flex-col text-center items-center jsutify-center pt-15">
      <div className="flex   text-2xl text-left gap-1">
        <label htmlFor="product_name">Product Name:</label>
    <input className="border-2 border-gray-300"type="text"
    value={productName}
    onChange={(e)=>setProductName(e.target.value)}
    name="" id=""  />
           <button className='border-gray-2 py-2 mt-1 bg-blue-500 rounded px-5 cursor-pointer' >Add</button>

      </div>
        {message && <p className='text-green-600 text-center'>{message}</p>}

      <div className="gap-1 mt-20 underline hover:text-blue-500">

        <p><a href="viewproduct"> view Products</a></p>
      </div>
   
   </div>
   </form>
   <Footer />
   </>

  )
}

export default Product
