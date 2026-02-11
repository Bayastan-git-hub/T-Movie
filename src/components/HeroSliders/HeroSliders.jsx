import React from 'react'
import bro1 from "../../assets/5a5dbf5a5a73712fb780c7eb6d1d8ad3b272b08d.jpg"
import bro2 from "../../assets/4208d5d8d69ca5cd6e495ccd5a4e4cde3d9f05f7.png"
import "./HeroSliders.css"

function HeroSliders() {
  return (
    <div className='brothers'>
        <div className="rig1"></div> <div ><img src={bro1} alt="" className="image1" /></div>
        <div className="rig3"></div><div ><img src={bro1} alt="" className="image2" /></div>
        <div ><img src={bro2} alt="" className="images" /></div>
        <div className="text">
          <h4 className='tom'>Tom Hardy</h4>
          <h1 className='legend'>LEGEND</h1>
          <p className='the'>THE NOTORIOUS TRUE STORY OF THE KRAY TWINS</p>
        </div>
          <button className="ct">▶ Watch now</button>
          <p className='thes'>Featuring the dazzling Emily Browning</p>
          <p className='fr'> FROM THE ACADEMY AWARD WINNING SCREENWRITER OF</p>
          <h6 className='la'> L.A.   Confidential</h6>

    </div>
  )
}

export default HeroSliders