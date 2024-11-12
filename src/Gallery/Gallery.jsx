import React from 'react'
import './Gallery.css'
import Navbarr from '../Navbarr/Navbarr'
import Mainnavbarr from '../mainnavbarr/Mainnavbarr'
import Copyright from '../Copyright/Copyright'
import gimg1 from "./gallery1.jpg"
import gimg2 from "./gallery2.jpg"
import gimg3 from "./gallery3.jpg"
import gimg4 from "./gallery4.jpg"
import gimg5 from "./gallery5.jpg"
import gimg6 from "./gallery6.jpg"
import gimg7 from "./gallery7.jpg"

function Gallery() {
  return (
    <div>
      <Navbarr/>
      <Mainnavbarr/>
      <div className='gallery'>



      </div>
      <div className='Our-Gallery' >
        <h1>Our Gallery</h1>
       <div className='gal-img'>
       
        <img src={gimg1} alt="" />
        <img src={gimg2} alt="" />
        <img src={gimg3} alt="" />
        <img src={gimg4} alt="" />
        <img src={gimg5} alt="" />
        <img src={gimg6} alt="" />
        <img src={gimg7} alt="" />
        <img src={gimg6} alt="" />

       </div>

       
      </div>
      <Copyright/>
        
      
    </div>
  )
}

export default Gallery
