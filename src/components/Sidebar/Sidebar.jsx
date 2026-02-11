import React from 'react'
import {Link} from "react-router-dom"
import "./Sidebar.css"
import logo from "../../assets/Logo (1).png"
import discover from "../../assets/discover.png"
import watch from "../../assets/watch.png"
import blog from "../../assets/blog.png"
import artist from "../../assets/artist.png"
import line from "../../assets/Seperator Line.png"
import contact from "../../assets/contact.png"
import help from "../../assets/help.png"
import setting from "../../assets/setting.png"


function Sidebar() {
  return (
    <div className='sidebar'>
      <Link><img src={logo} alt="" /></Link>
      <div className="menu">
        <p>Menu</p>
        <Link to={'/'} className='menu-page'>
        <img src={discover} alt="" />
        <h3>Discover</h3>
        </Link>
        <Link to={'/watchlist'} className='menu-page'>
        <img src={watch} alt="" />
        <h3>Watchlist</h3>
        </Link>
        <Link to={'/blog'} className='menu-page'>
        <img src={blog} alt="" />
        <h3>Blog</h3>
        </Link>
        <Link to={'/artists'} className='menu-page'>
        <img src={artist} alt="" />
        <h3>Artist</h3>
        </Link>
        <img src={line} alt="" />
        <Link to={'/contactus'} className='menu-page'>
        <img src={contact} alt="" />
        <h3>Contact Us</h3>
        </Link>
        <Link to={'/helpcenter'} className='menu-page'>
        <img src={help} alt="" />
        <h3>Help Center</h3>
        </Link>
        <Link to={'/setting'} className='menu-page'>
        <img src={setting} alt="" />
        <h3>Setting</h3>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
