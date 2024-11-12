import "../About/About.css";
import React, { useState } from "react";
import logo from "./lucknow.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Mainnavbarr() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <div>
      {showMobileNav && (
        <div className="mobile-nav">
          <div onClick={() => setShowMobileNav(false)}>
            <IoClose />
          </div>
          <ul>
            <li>Home</li>
            <li className="about-li">
              <NavLink to="/coach">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="./Gallery">Gallery</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="./Contact"> Contact Us</NavLink>{" "}
            </li>
          </ul>
        </div>
      )}
      <nav className="nav-1">
        <ul>
          <li>
            <img className="logo-img" src={logo} alt="Logo" />
          </li>
          <li>Home</li>
          <li>
            <NavLink to="/coach">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/service">Service</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="./Gallery">Gallery</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="./Contact"> Contact Us</NavLink>{" "}
          </li>
        </ul>
      </nav>
      <nav className="nav-2">
        <ul>
          <li>
            <img className="logo-img" src={logo} alt="Logo" />
          </li>
          <li className="ham" onClick={() => setShowMobileNav(!showMobileNav)}>
            <GiHamburgerMenu />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Mainnavbarr;
