//  this is  a presentational componnet 
<<<<<<< HEAD
const Movies = ({ movie, handleSelected }) => {
    // console.log(movie)


    return (
        <li role="button" onClick={() => {
            handleSelected(movie.imdbID);
            // handleWatchedMovie(movie);  // we are doing adding the movie inside the movieDetialed
        }}
        >
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li >
=======
const Movies = ({movie}) => {
    return (
            <li >
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                    <p>
                        <span>🗓</span>
                        <span>{movie.Year}</span>
                    </p>
                </div>
            </li>
>>>>>>> b481925f4c51918eb229cbce41040e1dfaeaac0c
    )
}

export default Movies