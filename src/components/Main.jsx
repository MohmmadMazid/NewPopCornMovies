import AllMoviesList from './AllMoviesList';
import WatchedMovies from './WatchedMovies';

const Main = ({movies}) => {
    
 

  return (
    <main className="main">
        <AllMoviesList  movies={movies} />
        <WatchedMovies  />
      </main>
  )
}

export default Main