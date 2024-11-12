import Navbarr from "./Navbarr/Navbarr.jsx";

import "./App.css";
import Footer from "./Footer/Footer";
import Luckball from "./Luckball/Luckball.jsx";
import About from "./About/About.jsx";
import Card from "./Luckbaalcard/Luckballcard.jsx";
import Seperator from "./seperator/Seperator.jsx";
import Learn from "./learn/Learn.jsx";
import Ourmisssion from "./Ourmission/Ourmission.jsx";
import Acedmy from "./Acedmy/Acedmy.jsx";
import Coch from "./Cochsection/Coch/Coch.jsx";
import Copyright from "./Copyright/Copyright.jsx";
import Contact from "./Contactus/Contact.jsx";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Service from "./Service/Service.jsx";
import Gallery from "./Gallery/Gallery.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/coach" element={<Coch />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/coach/Contact" element={<Contact />} />
          <Route path="/service/Contact" element={<Contact />} />
          <Route path="/service/Gallery/Contact" element={<Contact />} />
          <Route path="/service/Gallery" element={<Gallery />} />
          <Route path="/coach/Gallery" element={<Gallery />} />
          <Route path="/Contact/Gallery" element={<Gallery />} />

          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
