import React from "react";
import { Link } from "react-router-dom";
import series from "../../assets/668953ff5e8b900f962313499fd6b4452eb9a182.jpg";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img src={series} alt="" className="login-bg" />
      <div className="login-overlay"></div>

      <div className="login-topnav">
        <Link to="/">Home</Link>
        <Link to="/watchlist">Discover</Link>
        <Link to="/blog">Blog</Link>
        <span className="lang">English ▾</span>
      </div>

      {/* 🪟 Карточка */}
      <div className="login-card">
        <h2 className="login-title">login</h2>

        <div className="line-input">
          <input type="email" placeholder="Email" />
          <span className="icon">✉</span>
        </div>

        <div className="line-input">
          <input type="password" placeholder="Password" />
          <span className="icon">🔒</span>
        </div>

        <div className="login-options">
          <label><input type="checkbox" /> Remember Me</label>
          <span className="forgot">Forgot Password?</span>
        </div>

        <button className="login-btn">Login</button>

        <div className="divider">
          <span></span>
          Continue With
          <span></span>
        </div>

        <div className="socials">
          <div className="soc">G</div>
          <div className="soc"></div>
          <div className="soc">f</div>
        </div>

        <p className="create">
          Don’t have an account? <span>Create Account!</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
