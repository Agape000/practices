import React from 'react';

const Footer = () => {
  return (
   <footer className='flex fixed bottom-0 bg-blue-500 h-20 left-0 w-full text-white items-center justify-center text-center'>
     <p>&copy; {new Date().getFullYear()}MyApp . All rights reserved </p>
   </footer>
  );
};

export default Footer;
