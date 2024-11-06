import "./Acedmy.css";
// import img1 from "./gallery4.jpg";
import img1 from "./gallery1.jpg"
import img2 from "./gallery2.jpg"
import img3 from "./gallery3.jpg"
import img4 from "./gallery4.jpg"
import img5 from "./gallery5.jpg"
import img6 from "./gallery6.jpg"
import img7 from "./gallery7.jpg"
import React, { useEffect, useRef, useState } from "react";
import football from "./football.jpg";
import back from "./portfolio-bg.jpg";
import { MdZoomIn } from "react-icons/md";

function Acedmy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef();
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const slideWidth = 310; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % images.length);
      sliderRef.current.style.transform = `translateX(-${
        (currentIndex + 1) * slideWidth
      }px)`;
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);
  return (
    <div className="main-acedmy hide-scrollbar">
      <div className="acedmy">
        <h1>LUCKBALL ACADEMY INSIGHTS</h1>
        <div className="slider">
          <div className="slider-track" ref={sliderRef}>
            {images.map((image, index) => (
              <img src={image} alt={`Slide ${index + 1}`} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="football">
        <div className="part-1">
          <img src={football} alt="" />
        </div>
        <div className="part-2">
          <p>Are you ready to Join Us?</p>
          <p>Luckball Grassroots <br /> Football Programme</p>
          <p>
            Moment of joy for the young aspiring children who want to become
            good football players, as Luckball Football Academy is here to
            provide boys and girls aged 6-12 years football coaching programme
            in Lucknow.
          </p>
          <p>
            Want to see how we train our students? Then join our football
            sessions today.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Acedmy;
