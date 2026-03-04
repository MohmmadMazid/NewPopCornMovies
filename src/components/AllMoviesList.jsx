import React, { useState } from 'react'
import Movies from './Movies'
import Loader from "./Loader"; // ✅ Import Loader


const AllMoviesList = ({ movies, handleSelected, loading, error, handleWatchedMovie }) => {
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

        <ul className="list list-movies">
          {loading && <Loader />}
          {!loading && !error && movies?.map((movie) => (
            <Movies movie={movie} key={movie.imdbID} handleSelected={handleSelected} handleWatchedMovie={handleWatchedMovie} />
          ))}
        </ul>
      )}
    </div>


  )
}

export default AllMoviesList