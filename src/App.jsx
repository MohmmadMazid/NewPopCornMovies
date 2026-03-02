import { useState } from "react";
import Navbar from "./components/Navbar";
import AllMoviesList from "./components/AllMoviesList";
import WatchedMovies from "./components/WatchedMovies";
import { tempMovieData } from "./moviesdata";
import { tempWatchedData } from "./moviesdata";




export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  /*
  
  we have passed this data into the relavent component 
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  
const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
const avgUserRating = average(watched.map((movie) => movie.userRating));
const avgRuntime = average(watched.map((movie) => movie.runtime));
*/

  return (
    <>
      <Navbar query={query} setQuery={setQuery} movies={movies} />

      <main className="main">
       <AllMoviesList isOpen1={isOpen1} setIsOpen1={setIsOpen1} movies={movies} />
        <WatchedMovies isOpen2={isOpen2} setIsOpen2={setIsOpen2} watched={watched}  />
      </main>
    </>
  );
}
