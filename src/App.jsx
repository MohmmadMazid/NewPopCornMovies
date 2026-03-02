import { useState } from "react";
import Navbar from "./components/Navbar";
import { tempMovieData } from "./moviesdata";
import Main from "./components/Main";
import Logo from "./components/Navbar/Logo";
import SearchBox from "./components/Navbar/SearchBox";
import NumberResult from "./components/Navbar/NumberResult";






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

    {/* navbar is a structural coponent and Main is also a structural component */}
      <Navbar >
        <Logo/>
        <SearchBox/>
        <NumberResult movies={movies} />
      </Navbar>
      <Main movies={movies} />
    </>
  );
}
