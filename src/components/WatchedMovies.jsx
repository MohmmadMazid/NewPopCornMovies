import React, { useState } from 'react'
import MoviesYouWatched from './MoviesYouWatched';
import WatchedMoveisList from './WatchedMoveisList';
import { tempWatchedData } from '../moviesdata';
<<<<<<< HEAD
import MovieDetails from './MovieDetails';


const WatchedMovies = ({ selectdId, handleCloseMovie, watched, setWatched, handleWatchedMovie, handleDeleteWatchedMovie }) => {
    // const [watched, setWatched] = useState(tempWatchedData);
    const [isOpen2, setIsOpen2] = useState(true);
=======

const WatchedMovies = () => {
const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);



>>>>>>> b481925f4c51918eb229cbce41040e1dfaeaac0c
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
<<<<<<< HEAD
                    {
                        selectdId ? <MovieDetails selectdId={selectdId} handleCloseMovie={handleCloseMovie} handleWatchedMovie={handleWatchedMovie} watched={watched} />
                            :
                            <>
                                <MoviesYouWatched watched={watched} />
                                <WatchedMoveisList watched={watched} selectdId={selectdId} handleDeleteWatchedMovie={handleDeleteWatchedMovie} />
                            </>
                    }
=======
                    <MoviesYouWatched watched={watched} />
                    <WatchedMoveisList watched={watched} />
>>>>>>> b481925f4c51918eb229cbce41040e1dfaeaac0c
                </>
            )}
        </div>
    )
}

export default WatchedMovies