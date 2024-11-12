import React from 'react'
import Mainnavbarr from '../mainnavbarr/Mainnavbarr'
import Navbarr from '../Navbarr/Navbarr'
import Copyright from '../Copyright/Copyright'
import './Service.css'
import serimg from './shutterstock_222417766.jpg'
function Service() {
  return (
    <div>
        <Navbarr/>
        <Mainnavbarr/>
        <div className='service'>
        <div className="about-service">
        <p>Services</p>
        <p> Luckball Grassroots Football Programme</p>

        </div>
        
        </div>
        <div className='details'>
            <div className='service-desc'>
            <p>Our Services</p>
            <p>Football is a sport for everyone. It can be played by everyone regardless of age, gender, ethnic or social background and level of fitness. Luckball Academy aims and focuses on the development of players at the grassroots level.</p>
            <p>Luckball Grassroot Football Programme:</p>
            <p>Our grassroots programme targets boys and girls aged 6-12 years through school and community initiatives. The key concept of this programme is to bring together as many children as possible and train them using the core human value of exchange, training and practice. We also focus on recreational activities by conducting friendly matches with schools and academies. When kids are seeded with proper training, guidance and values at the root level it enables structured development and growth opportunities.</p>
            <p>From a parent looking for an individual program to a Primary or Secondary school representative looking for a football training solution – LA has the answer. Contact us today to find out what we can do for you.</p>

            </div>
            <div className='service-img'>
                <img src={serimg} alt="" />

            </div>
        </div>
        <Copyright/>
      
    </div>
  )
}

export default Service
