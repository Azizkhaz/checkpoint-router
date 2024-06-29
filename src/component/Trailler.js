import React from 'react'
import { useParams } from 'react-router-dom'
import {movies} from '../datamovies'
import './Trailler.css'
function Trailler() {
    const {id} = useParams()
    console.log(id)
    const foundmovie = movies.find((el)=> el.id === Number(id))
    console.log(foundmovie)
  return (
    <>
    <img
    src={foundmovie.PosterUrl}
    alt={foundmovie.Title}/>
    
    <div className="container">
  <div className="wrapper">
    <div className="banner-image"> </div>
    <h1>{foundmovie.Title}</h1>
    <p>
      {foundmovie.Description} <br />
      
    </p>
  </div>
 
    <p>{foundmovie.Rate}</p>
</div>
</>
  )
}

export default Trailler