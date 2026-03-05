import React from 'react'
import Watched from './Watched'
import MovieDetails from './MovieDetails';


const WatchedMoveisList = ({ watched, selectdId, selectCloseMovie, handleDeleteWatchedMovie }) => {
  return (

    // selectdId ? <MovieDetails selectdId={selectdId} selectCloseMovie={selectCloseMovie} /> :

    <ul className="list">
      {watched.map((movie) => (
        <Watched movie={movie} key={movie.imdbID} handleDeleteWatchedMovie={handleDeleteWatchedMovie} />
      ))}
    </ul>

  )
}

export default WatchedMoveisList