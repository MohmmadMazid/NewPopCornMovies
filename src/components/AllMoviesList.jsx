import React, { useState } from 'react'
import MovieList from './Movies'

const AllMoviesList = ({movies}) => {
    const [isOpen1, setIsOpen1] = useState(true);
  
  return (

         <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen1((open) => !open)}
          >
            {isOpen1 ? "–" : "+"}
          </button>
          {isOpen1 && (
            <ul className="list">
              {movies?.map((movie) => (
                <MovieList  movie={movie} key={movie.imdbID} />
              ))}
            </ul>
          )}
        </div>


  )
}

export default AllMoviesList