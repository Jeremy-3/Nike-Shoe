import { useEffect, useState } from "react";

function SlideShow({ images, interval = 3000, title }) {
  const [currentIndex, setcurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setcurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [images.length, interval]);
  return (
    <div>
      <img
        src={images[currentIndex]}
        alt={`slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
       {title && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-4xl font-bold bg-black bg-opacity-50">
          {title}
        </div>
      )}
    </div>
  );
}

export default SlideShow;
