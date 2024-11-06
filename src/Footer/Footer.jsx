import React from "react";
import "./Footer.css";
import img1 from "./personnel-1.jpg";
import img2 from "./personnel-2.jpg";

function Footer() {
  return (
    <div>
      <div className="footer">
      <h1>Partnership With</h1>
      <div className="main">
        <div className="footer-1">
          <img src={img1} alt="" />
          <p>Classs Timing</p>
          <p>Batch Timing</p>
          <p>Mon, Wed & Fri</p>
          <p>Timing : 5:15 p.m to 6:15 p.m</p>
        </div>
        <div className="footer-2">
          <img src={img2} alt="" />
          <p>Classes timming</p>
          <div className="timming" >
            <div className="timming-1">
            <p>First Batch Timing</p>
            <p>Tue, Thu, Sat</p>
            <p>Timing : 5:15 p.m to 6:15 p.m</p>
            </div>
            <div className="timming-2">
            <p>Second Batch Timing</p>
            <p>Tue, Thu, Sat</p>
            <p>Timing : 6:30 p.m to 7:30 p.m</p>       
            </div>

          </div>
        </div>
      </div>
      
    </div>
    
    </div>
  );
}

export default Footer;
