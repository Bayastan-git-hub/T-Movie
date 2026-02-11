// import image from "../../assets/image.png";
// import star from "../../assets/star.png";
import "./MovieCards.css";
const img_url = "https://image.tmdb.org/t/p/original"

const MovieCards = ({ film, genres }) => {

  const filmGenres = film.genre_ids
    .map(id => genres[id])   // число → слово
    .slice(0, 2)             // максимум 2 жанра
    .join(", ")              // в строку
 
  return (
    <div className="card">
      <img src={img_url + film.poster_path} alt="" className="image" />

      <div className="card_top">
        <div className="card_rating">
          <span>{film.vote_average}</span>
          <span className="star">/10</span>
        </div>
        <div className="card_fav">❤</div>
      </div>

      <div className="card_bottom">
        <h3>{film.title}</h3>
        <p className="genres">{filmGenres}</p>
      </div>
    </div>
  )
}

export default MovieCards
