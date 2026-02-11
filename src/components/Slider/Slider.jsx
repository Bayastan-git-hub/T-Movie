import React from 'react'
import news from "../../assets/Image (1).png"
import "./Slider.css"

function Slider() {
  return (
    <div className='yellow'>
      <div className="black">
          <img src={news} alt="" />
          <h3>Hot News</h3>
          <p>"Slow Horses," the popular spy drama, has been renewed for a fifth season, much to the delight of its dedicated fanbase.</p>
          <p>The highly anticipated fourth season is set to premiere on September 4, 2024, promising more thrilling storylines and complex characters that viewers have come to love.</p>
          <p>Notable cast members, including the acclaimed Gary Oldman and Cillian Murphy, will continue to bring depth and intrigue to the series.</p>
          <div>
            <p>25 Julyu</p>
            <p>1/6</p>
          </div>
      </div>
    </div>
  )
}

export default Slider 