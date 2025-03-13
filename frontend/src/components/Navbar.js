import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Candle Store</Link>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white px-4">Home</Link>
          <Link to="/products" className="text-gray-300 hover:text-white px-4">Products</Link>
          <Link to="/about" className="text-gray-300 hover:text-white px-4">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white px-4">Contact</Link>
          <Link to="/admin" className="text-gray-300 hover:text-white px-4">Admin</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
