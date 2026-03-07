import React, { useCallback, useEffect, useState } from 'react'
import Loader from "./Loader"
import StarRating from '../StarRattingComponent/StarRating';
import { useKey } from '../customHook/useKey';

const MovieDetails = ({ watched, selectdId, handleCloseMovie, handleWatchedMovie }) => {
    const [userRating, setUserRating] = useState("")
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true);
    const isWatched = watched.map((movie) => movie.imdbID).includes(selectdId)
    const watchedUserRating = watched.find((movie) => movie.imdbID == selectdId)?.userRating
    console.log("isWatched ", isWatched)


    const KEY = "328a19de";
    const { Title: title,
        Year: year,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre } = movie

    // console.log("hello ", title, imdbRating, actors)
    const handleAddMovieToWachedList = () => {

        const newWatchedMovie = {
            imdbID: selectdId,
            title,
            year,
            poster,
            imdbRating: Number(imdbRating),
            runtime: Number(runtime.split(" ").at(0)),
            userRating,

        }
        handleWatchedMovie(newWatchedMovie)
        handleCloseMovie()
    }
    // useEffect functionality when we perform some event by clicking the button 

    // useEffect(() => {
    //     const handleKeyDown = (e) => {
    //         if (e.key === "Enter") {
    //             handleCloseMovie();
    //             console.log("close");
    //         }
    //     };

    //     document.addEventListener("keydown", handleKeyDown);

    //     return () => {
    //         document.removeEventListener("keydown", handleKeyDown);
    //     };
    // }, [handleCloseMovie]);


    // instead of using above function useEffect we have created the useKey custom hook 
    useKey('Escape',function(){
        handleCloseMovie();
    })
    useEffect(() => {
        const getMovieDetail = async () => {
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectdId}`)
            const data = await res.json();
            // console.log("movie detail inside the movie details component ", data)
            setMovie(data);
            setLoading(false)
        }

        getMovieDetail();

    }, [selectdId])

    useEffect(() => {
        if (!title) return;
        document.title = `Movie | ${title}`

        return () => {
            document.title = "popcornMovies "
        }

    }, [title])

    const handleRating = () => {
        console.log("rating")
    }
    return (
        <div className='details'>
            {loading ? <Loader /> : (
                <>
                    <header>

                        <button className='btn-back' onClick={handleCloseMovie} >&larr;</button>
                        <img src={poster} alt={`Poster of the movie-> ${title}`} />
                        <div className='details-overview'>
                            <p>{title}</p>
                            <p>{released} &bull; {runtime} </p>
                        </div>
                    </header>
                    <section>
                        <div className='rating'>
                            {!isWatched ? (
                                <>
                                    <StarRating length={10} size="18" setMovieRating={setUserRating} />
                                    {userRating > 0 && (
                                        <button className='btn-add' onClick={handleAddMovieToWachedList}>
                                            + add to list
                                        </button>
                                    )}
                                </>
                            ) : (
                                <p>You have rated this movie {watchedUserRating} ✨</p>
                            )}
                        </div>
                        <p>
                            <em>{plot}</em>
                        </p>
                        <p>Starring :{actors}</p>
                        <p>Director :{director}</p>
                        <p></p>
                    </section>
                </>
            )}
        </div>
    )
}

export default MovieDetails