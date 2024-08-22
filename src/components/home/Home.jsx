import React from "react";
import SlideShow from "./SlideShow";
import ShoesData from "./ShoesData";

function Home({ handleAddToCart }) {
  const images = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1616659278861-870581e03ada?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
  ];

  return (
    <div className="relative w-full h-64 md:h-80">
      <SlideShow images={images} interval={3000} title="NIKE SHOES" />
      <ShoesData handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default Home;
