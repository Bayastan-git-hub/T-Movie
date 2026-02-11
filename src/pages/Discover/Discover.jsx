import React from 'react'
import "./Discover.css"
import HeroSlider from '../../components/HeroSlider/HeroSlider'
import Slider from '../../components/Slider/slider'
import HeroSlide from '../../components/HeroSlide/HeroSlide'
import Baner from '../../components/Baner/Baner'
import HeroSliders from '../../components/HeroSliders/HeroSliders'
import Watchlist from '../Watchlist/Watchlist'

function Discover() {
  return (
    <div className='kok'>
      <div className='main-discover'>
     <div className="centeR">
       <HeroSlider/>
     </div>
     <div className="righT">
      <Slider/>
     </div>
    </div>
      {/* <Watchlist/> */}
     <HeroSlide/>
     <HeroSliders/>
     <Baner/>
    </div>
  )
} 

export default Discover