import React, { useState } from 'react'
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const login = () => {
  const [email,setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [message, setMessage]=useState("")
 const navigate = useNavigate(); // Hook for navigation

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:2222/api/login", {
      email,
      password
    });

    if (response.status === 200) {
      setMessage("Login successfully");
      navigate("/home");
    }
  } catch (err) {
    console.log(err);
    // Show more specific messages if available
    if (err.response && err.response.data && err.response.data.message) {
      setMessage(err.response.data.message);
    } else {
      setMessage("Failed to login");
    }
  }
};

  return (
    <>
    <div className="min-h-screen flex items-center justify-center font-mono bg-gradient-to-r from-cyan-500 from-10% via-indigo-500 via-50% to-sky-500 to-100%">
        <div className="flex shadow-2xl">
            <div className="flex flex-col items-center justify-center text-center rounded-md p-20 bg-white gap-8">
                <h1 className='text-5xl text-bold'>Welcome</h1>
                <div className="flex flex-col text-2xl text-left gap-1">
                    <span>Email:</span>
                    <input type="text" className='border-2 rounded-md focus:border-cyan-400 focus:bg-slate-50 outline-none' 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col text-2xl text-left">
                    
                    <span>Password:</span>
                    <input type="text" className='rounded-md border-2 outline-none focus:border-cyan-400 focus:bg-slate-50'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    </div> 
                    <button className='px-10 py-2 cursor-pointer  texl-2xl rounded-md bg-gradient-to-tr from-green-400 to-blue-400
                    hover:from-pink-500 hover:to-yellow-500
                    ' onClick={handleSubmit}>
                        Login
                    </button>
                    {message && <p className="text-center text-red-500">{message}</p>}

            </div>
        </div>
    </div>
    </>
  ) 
}

export default login
