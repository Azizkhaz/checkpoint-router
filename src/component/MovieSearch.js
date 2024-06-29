import React from 'react'

function MovieSearch({setSearchTitle}) {
  return (
    <div>
          <input placeholder='looking for a movie ? ' 
       onChange={(e)=> setSearchTitle(e.target.value)} />
    </div>
  )
}

export default MovieSearch