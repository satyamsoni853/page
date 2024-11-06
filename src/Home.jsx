import React from "react";
import Navbarr from "./Navbarr/Navbarr";
import About from "./About/About";
import Learn from "./learn/Learn";
import Luckball from "./Luckball/Luckball";
import Acedmy from "./Acedmy/Acedmy";
import Footer from "./Footer/Footer";
import Copyright from "./Copyright/Copyright";
import Ourmission from "./Ourmission/Ourmission";
import Luckballcard from "./Luckbaalcard/Luckballcard.jsx";

function Home() {
  return (
    <>
      <Navbarr />
      <About />
      <Learn />
      <Luckball />
      <Luckballcard />
      <Ourmission />
      <Acedmy />
      <Footer />
      <Copyright />
    </>
  );
}

export default Home;
