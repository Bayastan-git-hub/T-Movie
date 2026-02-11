import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards/Cards'
import "./Artists.css"


const API = "https://api.themoviedb.org/3/movie/550/credits?api_key=2fa8f297328a4293f06805fe0c1b915d"
const IMG_URL = "https://image.tmdb.org/t/p/w500"

function Artists() {
  const [artists, setArtists] = useState([])

  async function getArtist() {
    try {
      const res = await fetch(API)
      const data = await res.json()
      setArtists(data.cast) 
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getArtist()
  }, [])

  return (
    <div className="artists">
      {artists.map(actor => (
<Cards
  key={actor.id}
  name={actor.name}
  image={
    actor.profile_path
      ? IMG_URL + actor.profile_path
      : "https://via.placeholder.com/300x450?text=No+Image"
  }
  departments={[actor.known_for_department, "Producer", "Writer"].slice(0, 2)} 
  movies={Math.round(actor.popularity)}
/>

      ))}
    </div>
  )
}

export default Artists
