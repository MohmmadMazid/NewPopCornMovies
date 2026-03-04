import React from 'react'
import Watched from './Watched'

const WatchedMoveisList = ({watched}) => {
  return (

        <ul className="list">
                {watched.map((movie) => (
                  <Watched  movie={movie} key={movie.imdbID} />
                ))}
              </ul>

  )
}

export default WatchedMoveisList