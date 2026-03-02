import { useState } from "react";
import Navbar from "./components/Navbar";
import { tempMovieData } from "./moviesdata";
import Main from "./components/Main";




export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

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
      <Navbar movies={movies} />
      <Main movies={movies} />
    </>
  );
}
