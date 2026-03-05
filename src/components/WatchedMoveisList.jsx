import React from 'react'
import Watched from './Watched'
<<<<<<< HEAD
import MovieDetails from './MovieDetails';


const WatchedMoveisList = ({ watched, selectdId, selectCloseMovie, handleDeleteWatchedMovie }) => {
  return (

    // selectdId ? <MovieDetails selectdId={selectdId} selectCloseMovie={selectCloseMovie} /> :

    <ul className="list">
      {watched.map((movie) => (
        <Watched movie={movie} key={movie.imdbID} handleDeleteWatchedMovie={handleDeleteWatchedMovie} />
      ))}
    </ul>
=======

const WatchedMoveisList = ({watched}) => {
  return (

        <ul className="list">
                {watched.map((movie) => (
                  <Watched  movie={movie} key={movie.imdbID} />
                ))}
              </ul>
>>>>>>> b481925f4c51918eb229cbce41040e1dfaeaac0c

  )
}

export default WatchedMoveisList