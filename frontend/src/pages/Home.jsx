import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
const Home = () => {
  return (

   <>
   <Navbar></Navbar>

   <div className='flex left-0 text-3xl items-center justify-center text-center pt-70'>
    <h1>Welcome to the Home Page</h1>
   </div>

   <Footer />
   </>
  )
}

export default Home

  