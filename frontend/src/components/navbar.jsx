import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any saved data like token (optional)
    // localStorage.removeItem("token");
    navigate("/"); // Redirect to login page
  };

  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center p-4">
      <div className="text-xl font-bold">MyApp</div>

      <ul className="flex space-x-6">
        <li><Link to="/home" className="hover:text-yellow-300">Home</Link></li>
        <li><Link to="/Product" className="hover:text-yellow-300">Product</Link></li>
        <li><Link to="/StockIn" className="hover:text-yellow-300">StockIn</Link></li>
        <li><Link to="/StockOut" className="hover:text-yellow-300">StockOut</Link></li>
        <li><Link to="/profile" className="hover:text-yellow-300">Profile</Link></li>
        <li><button onClick={handleLogout} className="hover:text-yellow-300">Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
