// import React, { useState, useEffect } from "react";
// import slider1 from "./slider-1.jpg";
// import slider2 from "./slider-2.jpg";
// import slider3 from "./slider-3.jpg";
// import "./About.css";
// import { GrPrevious } from "react-icons/gr";
// import { MdNavigateNext } from "react-icons/md";
// import logo from "./lucknow.png";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoClose } from "react-icons/io5";

// function About() {
//   const images = [slider1, slider2, slider3];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [setshowMoblieNav, setSetshowMoblieNav] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const goToPrevious = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };
//   return (
//     <div className="main-container">
//       {setshowMoblieNav ? (
//         <div className="mobile-nav">
//           <div onClick={() => setSetshowMoblieNav(false)}><IoClose /></div>
//           <ul>
//             <li>home</li>
//             <li>About us</li>
//             <li>Service</li>
//             <li>Gallery</li>
//             <li>Contact us</li>
//           </ul>
//         </div>
//       ) : null}

//       <nav className="nav-1">
//         <ul>
//           <li>
//             <img className="logo-img" src={logo} alt="" />
//           </li>
//           <li>home</li>
//           <li>About us</li>
//           <li>Service</li>
//           <li>Gallery</li>
//           <li>Contact us</li>
//         </ul>
//       </nav>
//       <nav className="nav-2">
//         <ul>
//           <li>
//             <img className="logo-img" src={logo} alt="" />
//           </li>
//           <li
//             className="ham"
//             onClick={() => setSetshowMoblieNav(!setshowMoblieNav)}
//           >
//             <GiHamburgerMenu />
//           </li>
//         </ul>
//       </nav>
//       <main>
//         <div className="slider-container">
//           <button onClick={goToPrevious} className="slider-button-1">
//             <GrPrevious />
//           </button>
//           <img
//             src={images[currentIndex]}
//             alt="Slider"
//             className="slider-image"
//           />
//           <button onClick={goToNext} className="slider-button-2">
//             <MdNavigateNext />
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default About;



import Slider from '../Slider/Slider'
import Mainnavbarr from '../mainnavbarr/Mainnavbarr'


import React from 'react'

function About() {
  return (
    <div>
      <Mainnavbarr/>
      <main>
        <Slider/>
      </main>
      
    
      
    </div>
  )
}

export default About
