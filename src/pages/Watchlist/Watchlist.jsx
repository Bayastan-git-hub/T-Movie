import React, { useState, useEffect } from "react"
import MovieCards from "../../components/MovieCards/MovieCards"
import "./Watchlist.css"

function Watchlist() {
  const [films, setFilms] = useState([])
  const [genres, setGenres] = useState({})

  useEffect(() => {

    // 🎬 ФИЛЬМЫ
    fetch("https://api.themoviedb.org/3/movie/now_playing?language=ru&api_key=2fa8f297328a4293f06805fe0c1b915d")
      .then(res => res.json())
      .then(data => {
        setFilms(data.results)
      })

    // 📚 ЖАНРЫ
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=2fa8f297328a4293f06805fe0c1b915d&language")
      .then(res => res.json())
      .then(data => {
        const genreMap = {}

        data.genres.forEach(item => {
          genreMap[item.id] = item.name
        })

        setGenres(genreMap)
      })

  }, [])

  if (films.length === 0) {
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
