import React from "react";
import "./Header.css";
import Toji from "../../assets/Toji.jpg";
import Ikon from "../../assets/icon.png";
import Ikon1 from "../../assets/search-normal.png";
import Ikon2 from "../../assets/setting-3.png";
import { Link } from "react-router-dom";

function Header() {
  const menu = ["All", "Movie", "Series", "Genres"];

  return (
    <header className="header">
      <nav className="left">
        {menu.map((item) => (
          <a
            key={item}
            href="#"
            className={item === "All" ? "active" : ""}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="right">
        <div className="search-box">
          <img src={Ikon1} alt="" className="search-icon left-icon" />
          <input type="text" placeholder="Search the series, movies ..." />
          <img src={Ikon2} alt="" className="search-icon right-icon" />
        </div>

        <div className="logo">
          <img src={Ikon} alt="menu" className="menu-icon" />
          <span className="red"></span>
          </div>

        <div className="profile">
          <Link to={"/login"}><img src={Toji} alt="profile" /></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
