import React from "react";
import "./Coch.css";
import logo from "./lucknow.png";
import cochimg from "./yoga.jpg";
import trainerimg from './slider-4.jpg'
import companyimg1 from './unicef.png'
import companyimg2 from './sitrefesp.png'
import companyimg3 from './fpf.png'
import companyimg4 from './fcbarcelona.png'

function Coch() {
  return (
    <div>
      <div className="coch">
        <div className="about-coch">
          <p>About Coach</p>
          <p>Brazilian Football Coach</p>
        </div>
       

      </div>
      
        
      
      <div className="details">
        <div className="coch-desc">
          <p>Fernando Coutinho</p>
          <p>Sao Paulo - Brazil</p>
          <p>
            Currently Sport Manager, Founder and Head Coach of LUCKBALL ACADEMY
            in Lucknow, India.
          </p>
          <p>
            Experience: Since 1990 until 2009 played as the goalkeeper in Local
            Leagues and Third Division Leagues of Football in Sao Paulo City.
            Involved and developing football social programme to children.
          </p>
        </div>
        <div className="coch-img">
          {" "}
          <img src={cochimg} alt="" />
        </div>
      </div>
      <div className="Courses ">
        <h1>Coaching Credential & Courses Awarded by:
        </h1>
        <div className="courses-details" >
          <div>
            <p>SITREFESP</p> <br />
            <p>Union of Professional Coaches <br />State Football of Sao Paulo, Brazil, 2014.</p>
          </div>
          <div>
            <p>SITREFESP</p> <br />
            <p>Union of Professional Coaches <br />State Football of Sao Paulo, Brazil, 2014.</p>
          </div>
          <div>
            <p>SITREFESP</p> <br />
            <p>Union of Professional Coaches  <br />State Football of Sao Paulo, Brazil, 2014.</p>
          </div>
          

        </div>
        <div className="course-comapany">
          <img src={companyimg1} alt="" />
          <img src={companyimg2} alt="" />
          <img src={companyimg3} alt="" />
          <img src={companyimg4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Coch;
