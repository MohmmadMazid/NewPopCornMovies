import React, { useState } from 'react'
import StarRating from './StarRating'

const MovieRating = () => {
  const [movieRating,setMovieRating]=useState(0)
  return (
    <div>
        <StarRating length={5} color='blue' setMovieRating={setMovieRating} />
        <p>This movie was rated {movieRating} star</p>
    </div>
  )
}

export default MovieRating