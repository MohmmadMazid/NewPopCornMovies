import React, { useState } from 'react'
import MoviesYouWatched from './MoviesYouWatched';
import WatchedMoveisList from './WatchedMoveisList';
import { tempWatchedData } from '../moviesdata';

const WatchedMovies = () => {
const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);



    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen2((open) => !open)}
            >
                {isOpen2 ? "–" : "+"}
            </button>
            {isOpen2 && (
                <>
                    <MoviesYouWatched watched={watched} />
                    <WatchedMoveisList watched={watched} />
                </>
            )}
        </div>
    )
}

export default WatchedMovies