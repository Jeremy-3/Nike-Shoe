import React, { useState, useEffect } from "react";

function ShoesData({ handleAddToCart }) {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch("https://n-ike-backend.vercel.app/shoes")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);

  const shoeItems = shoes.map((shoe) => (
    <div key={shoe.id} className="border border-gray-300 rounded-md p-2 mb-2 max-w-xs">
      <h2 className="text-lg font-medium mb-1">{shoe.name}</h2>
      <img src={shoe.image} alt={shoe.name} className="w-full h-auto mb-1 rounded-sm" />
      <p className="text-gray-600 text-sm mb-1">{shoe.description}</p>
      <p className="text-base font-semibold">${shoe.price.toFixed(2)}</p>
      <button
        onClick={() => handleAddToCart(shoe)}
        className="bg-slate-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md mt-2"
      >
        Add to Cart
      </button>
    </div>
  ));

  return <div className="flex flex-wrap justify-center gap-4">{shoeItems}</div>;
}

export default ShoesData;
