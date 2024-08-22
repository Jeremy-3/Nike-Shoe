import React from "react";
import NavBar from "./NavBar";

function Header({ cart }) {
  return (
    <header className="bg-gray-600 p-4">
      <NavBar cart={cart} />
    </header>
  );
}

export default Header;
