import React from "react"

const IMG = "https://image.tmdb.org/t/p/w500"

function ArtistCards({ arti }) {
  return (
    <div className="artist-card">
      <img
        src={IMG + arti.profile_path}
        alt={arti.name}
        className="artist-img"
      />

      {/* Бейджи */}
      <div className="artist-badges">
        <span>Actor</span>
      </div>

      {/* Нижний градиент */}
      <div className="artist-overlay">
        <h3>{arti.name}</h3>
        <p>{arti.known_for_department}</p>
      </div>
    </div>
  )
}

export default ArtistCards
