import React, { useState, useEffect } from "react"
import MovieCards from "../../components/MovieCards/MovieCards"
import "./Watchlist.css"
import { apiClient } from "../../components/axios/apiClient"

function Watchlist() {
  const [films, setFilms] = useState([])
  const [genres, setGenres] = useState({})

   
  async function getFilm() {
    try {
      const res = await apiClient.get("/movie/now_playing?language=ru&api_key=2fa8f297328a4293f06805fe0c1b915d")
      setFilms(res.data.results)
      
      const genreRes = await apiClient.get("/genre/movie/list?api_key=2fa8f297328a4293f06805fe0c1b915d&language=ru")
      const genreMap = {}
      genreRes.data.genres.forEach(g => {
      genreMap[g.id] = g.name
      })

      setGenres(genreMap)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getFilm()
  }, [])

  if (!films.length || !Object.keys(genres).length) {
    return <h2 style={{color:"white"}}>Loading...</h2>
  }

  return (
    <div className="watchlist">
      {films.map(film => (
        <MovieCards key={film.id} film={film} genres={genres} />
      ))}
    </div>
  )
}

export default Watchlist
