import React from 'react'
import { Link } from 'react-router-dom'

const MovieElement = ({movie,removeMovie}) => {
  return (
    <>
    <button  onClick={()=>removeMovie(movie.id)}   >X</button>
    <li>
    

    <img
      src={movie.PosterURL}
      alt=""
      className="cover"
    />
    <p className="title">{movie.Title}</p>
    <p className="genre">{movie.Rate}</p>
  </li>
  <button><Link to={`/trailer/${movie.id}`}></Link>Trailer</button>

  </>
  )
}

export default MovieElement 