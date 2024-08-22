import React from "react";
import { Link } from "react-router-dom";

function NavBar({ cart }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-700">
      <div className="flex gap-8">
        <Link to="/" className="text-white px-3 py-2 rounded hover:bg-gray-600">Home</Link>
        <Link to="/about" className="text-white px-3 py-2 rounded hover:bg-gray-600">About</Link>
        <Link to="/contact" className="text-white px-3 py-2 rounded hover:bg-gray-600">Contact</Link>
      </div>
      <div>
        <Link
          to="/cart"
          className="text-white px-3 py-2 rounded hover:bg-gray-600 flex items-center"
        >
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
