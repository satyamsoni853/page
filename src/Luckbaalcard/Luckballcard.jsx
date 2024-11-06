import React from "react";
import "./Luckballcard.css";
import card1 from "./shutterstock_109996532.jpg";
import card2 from './shutterstock_232351570.jpg';
import carrd3 from  './shutterstock_232351570 (1).jpg';
import Seperator from "../seperator/Seperator";

function Luckballcard() {
  return (
    
    <div>
      <Seperator className="top-line" />
      
      <div className="body">
     
     <div className="card-container">
     {/* Card 1 */}
     <div className="flip-card">
       <div className="flip-card-inner">
         <div className="flip-card-front">
           <img src={card1} alt="Card Image" className="card-image" />
         </div>
         <div className="flip-card-back">
           <img src={card1} alt="Card Image" className="card-image" />
           <div className="card-content">
             <h3>Best Football Training</h3>
             <p>
               "Want To Be The Best, <br />
               Train With The Best". Luckball Academy aims at providing the Best
               Football Training Programs in Lucknow and developing grassroots
               football across India.
             </p>
           </div>
         </div>
       </div>
     </div>

     {/* Card 2 */}
     <div className="flip-card">
       <div className="flip-card-inner">
         <div className="flip-card-front">
           <img src={card2} alt="Card Image" className="card-image" />
         </div>
         <div className="flip-card-back">
           <img src={card2} alt="Card Image" className="card-image" />
           <div className="card-content">
             <h3>Football Coaching Program</h3>
             <p>
               Our academy provides structured coaching for children and develops
               foundational skills to become great players.
             </p>
           </div>
         </div>
       </div>
     </div>

     {/* Card 3 */}
     <div className="flip-card">
       <div className="flip-card-inner">
         <div className="flip-card-front">
           <img src={carrd3} alt="Card Image" className="card-image" />
         </div>
         <div className="flip-card-back">
           <img src={carrd3} alt="Card Image" className="card-image" />
           <div className="card-content">
             <h3>Join Our Training</h3>
             <p>
               Start your journey to becoming a skilled footballer with Luckball Academy. Sign up today!
             </p>
           </div>
         </div>
       </div>
     </div>
   </div>
   </div>
   <Seperator className="bottom-line" />
    </div>
      


  );
}

export default Luckballcard;
