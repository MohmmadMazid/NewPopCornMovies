//  this is  a presentational componnet 
const Movies = ({ movie, handleSelected, handleWatchedMovie }) => {
    // console.log(movie)


    return (
        <li role="button" onClick={() => {
            handleSelected(movie.imdbID);
            handleWatchedMovie(movie);
        }} >
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li >
    )
}

export default Movies