import React from "react";
import "./Learn.css";
import icon from "./icon-1.png";
import service from "./service-bg-1.jpg";
import { MdElectricBolt } from "react-icons/md";
import {motion} from 'framer-motion'

function Learn() {
  return (
    <div className="learn">
      <motion.div
      
       className="learn-1">
        <h3 className="header-title">
          <img src={icon} alt="Football Icon" className="header-icon" />
          <h1>
            Learn to play Football from the Brazilian Football
            <br />
            Coach and play Football the Brazilian Way
          </h1>
        </h3>

        <p>
          At Luckball Football Academy learn to play good football with our
          Luckball <br />
          Grassroots Football Programme. Our programme specializes in the
          training and <br />
          development of young aspiring football players. If you want to play
          football like <br />
          Brazilian football players, then join our Academy Today !
        </p>
        <br />
        <button>View Program</button>
      </motion.div>
      <motion.div
     
       className="learn2">
        <h3>
          <MdElectricBolt />
          If you train hard, you’ll not only be hard, you’ll <br />
          be hard to beat.
        </h3>
        <p>
          Luckball Academy brought Brazilian football culture to Lucknow through
          high <br /> quality football education in partnership with overseas
          coaches. <br />
          This initiative will bring technical diversity to the environment in
          the field, as well <br />
          as develop students' technical skills and knowledge.
        </p>{" "}
        <br />
        <button>How we train</button>
      </motion.div>
    </div>
  );
}

export default Learn;
