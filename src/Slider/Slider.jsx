
import '../About/About.css'
import React, { useState, useEffect } from "react";
import slider1 from "./slider-1.jpg";
import slider2 from "./slider-2.jpg";
import slider3 from "./slider-3.jpg";
import { GrPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

function Slider() {
    const images = [slider1, slider2, slider3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div>
         <div className="slider-container">
      <button onClick={goToPrevious} className="slider-button-1">
        <GrPrevious />
      </button>
      <img
        src={images[currentIndex]}
        alt="Slider"
        className="slider-image"
      />
      <button onClick={goToNext} className="slider-button-2">
        <MdNavigateNext />
      </button>
    </div>

      
    </div>
  )
}

export default Slider
