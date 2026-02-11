import React from 'react'
import "./HeroSlide.css"
import Fon from "../../assets/aa0a186db879087e7e640e8c87a1167f948078f3 (1).png"
import Tomi from "../../assets/Image (Tommy Shelby).png"
import Pesok from "../../assets/Image (Fog).png"
import Logo from "../../assets/Play Icon.svg"

function HeroSlide() {
  return (
    <div className='Tomas'>
      <div className="spans">
        <span className="span">SHELBY</span>
        <span className="span">DISTILLERY</span>
        </div>
        <img src={Fon} alt="" className='fon'/>
        <img src={Tomi} alt="" className="tomi" />
        <img src={Pesok} alt="" className="pesok" />
        <div className="contain">
          <p className='description'>Peaky Blinders is a British crime drama about the Shelby family in post-World War I Birmingham, as they build their power through criminal activities. Led by the cunning Tommy Shelby, the show mixes intense drama with historical grit.</p>
          <button className='watch'><img src={Logo} alt="" />WATCH TRAILER</button>
        </div>
        <div className="text">
          <h4 className="h4-text">BIRMINGHAM 1919</h4>
          <h1 className='h1-text'>Peaky Blinders</h1>
        </div>
    </div>
  )
}

export default HeroSlide