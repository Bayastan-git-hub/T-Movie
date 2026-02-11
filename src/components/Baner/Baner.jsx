import React from "react";
import baner1 from "../../assets/295b6804991c06c018cedb5680401ad5279357e7.jpg";
import baner2 from "../../assets/4c592c8f55583dcf82e0bbdd261860b6ec87f8e1 (1).jpg";
import baner3 from "../../assets/c3bbb12ab7764d6f3c0b9dc2a28a1361afb9a0b6.png";
import "./Baner.css";

export default function Baner() {
  return (
    <section className="baners">
      <div className="grid">
        {/* LEFT BIG */}
        <div className="car big">
          <img src={baner1} alt="Shogun" />
          <div className="overlay">
            <p className="eyebrow">Uncovering Secrets, Shifting Powers</p>
            <h2>Shogun</h2>
            <p className="desc">
              When a mysterious European ship sinks near a nearby fishing
              village, Lord Yoshi Toranaga uncovers secrets that could tip the
              balance of power.
            </p>
            <button className="cta">▶ Watch now</button>
          </div>
        </div>

        {/* BOTTOM LEFT */}
        <div className="car wide">
          <img src={baner2} alt="The Sympathizer" />
          <div className="overlay bottom">
            <h2>The Sympathizer</h2>
            <p className="meta">Historical · Drama · Thriller</p>
            <button className="cta">▶ Watch now</button>
          </div>
        </div>

        {/* RIGHT TALL */}
        <div className="car tall">
          <img src={baner3} alt="A Small Light" />
          <div className="overlay right">
            <p className="eyebrow">RISK EVERYTHING</p>
            <h2>A Small Light</h2>
            <button className="cta">▶ Watch now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
