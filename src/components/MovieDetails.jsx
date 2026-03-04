import React, { useEffect, useState } from 'react'
import Loader from "./Loader"
import StarRating from '../StarRattingComponent/StarRating';

const MovieDetails = ({ selectdId, handleCloseMovie }) => {
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true);
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

    console.log("hello ", title, imdbRating, actors)
    useEffect(() => {
        const getMovieDetail = async () => {
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectdId}`)
            const data = await res.json();
            console.log("movie detail inside the movie details component ", data)
            setMovie(data);
            setLoading(false)
        }

        getMovieDetail();
    }, [selectdId])

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
                            <StarRating length={10} size="18" />

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