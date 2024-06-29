import React, { useState } from 'react'
import MovieElement from './MovieElement'

const MovieList = ({movieList,removeMovie,searchTitle}) => {
  const [sort,setSort]=useState('all')
  return (
  <>
  <div  style={{display:"flex"}}>
    <button    style={{width:"200px",margin:"5px"}}  onClick={()=>setSort('action')}   >Action</button>
    <button style={{width:"200px",margin:"5px"}}   onClick={()=>setSort('scienceFiction')} >scienceFiction</button>
    <button  style={{width:"200px",margin:"5px"}}   onClick={()=>setSort('Horror')}>Horror</button>
    <button  style={{width:"200px",margin:"5px"}}   onClick={()=>setSort('all')}>all</button>


  </div>
  <ul className="list">
           {
            movieList.length >0 && sort==="all" ? 
           
            movieList.filter((el)=> el.Title.toLowerCase().includes(searchTitle.toLowerCase().trim())  )
            .map((el)=>   <MovieElement  movie={el} removeMovie={removeMovie}   />):  <h1></h1>
           }

     {
            movieList.length >0 && sort==="action" ? 
            movieList
            .filter((el)=>  el.Description ==="action")
            .map((el)=>   <MovieElement  movie={el} removeMovie={removeMovie}   />):  <h1></h1> 
           }

{
            movieList.length >0 && sort==="scienceFiction" ? 
            movieList
            .filter((el)=>  el.Description ==="scienceFiction")
            .map((el)=>   <MovieElement  movie={el} removeMovie={removeMovie}   />):  <h1></h1> 
           }


{
            movieList.length >0 && sort==="Horror" ? 
            movieList
            .filter((el)=>  el.Description ==="Horror")
            .map((el)=>   <MovieElement  movie={el} removeMovie={removeMovie}   />):  <h1></h1> 
           }






          </ul>
  </>
  
  )
}

export default MovieList