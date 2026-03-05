import React, { useState } from 'react'
import MoviesYouWatched from './MoviesYouWatched';
import WatchedMoveisList from './WatchedMoveisList';
import { tempWatchedData } from '../moviesdata';
import MovieDetails from './MovieDetails';


const WatchedMovies = ({ selectdId, handleCloseMovie, watched, setWatched, handleWatchedMovie, handleDeleteWatchedMovie }) => {
    // const [watched, setWatched] = useState(tempWatchedData);
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
                    {
                        selectdId ? <MovieDetails selectdId={selectdId} handleCloseMovie={handleCloseMovie} handleWatchedMovie={handleWatchedMovie} watched={watched} />
                            :
                            <>
                                <MoviesYouWatched watched={watched} />
                                <WatchedMoveisList watched={watched} selectdId={selectdId} handleDeleteWatchedMovie={handleDeleteWatchedMovie} />
                            </>
                    }
                </>
            )}
        </div>
    )
}

export default WatchedMovies