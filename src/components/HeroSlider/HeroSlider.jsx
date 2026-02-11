import React from 'react'
import Hero from "../../assets/Hero Slider.png"
import "./HeroSlider.css"

function HeroSlider() {
  return (
    <div className='Hero'>
        <img src={Hero} alt="" />
    </div>
  )
}

export default HeroSlider