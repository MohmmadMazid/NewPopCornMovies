import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { tempMovieData } from "./moviesdata";
import Main from "./components/Main";
import Logo from "./components/Navbar/Logo";
import SearchBox from "./components/Navbar/SearchBox";
import NumberResult from "./components/Navbar/NumberResult";
import AllMoviesList from "./components/AllMoviesList";
import WatchedMovies from "./components/WatchedMovies";
import Loader from "./components/Loader";






export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectdId, setSelectdId] = useState(null);
  const [watched, setWatched] = useState([]);


  const KEY = "328a19de";
  const queryParam = "Parasite"
  useEffect(() => {
    setLoading(true);
    const fetchMovie = async () => {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`)

      const data = await res.json();
      setLoading(false);
      // console.log(data)
      setMovies(data?.Search || []);
    }
    fetchMovie();
  }, [query])
  // this for the selecting the movie 
  const handleSelected = (id) => {
    setSelectdId((selectdId) => id === selectdId ? null : id)
    console.log(selectdId)
  }

  // this function is for closing the movie

  const handleCloseMovie = () => {
    setSelectdId(null);
    console.log(selectdId);

  }

  // this function is for the adding the watched movie into the watched movie array 

  const handleWatchedMovie = (movie) => {

    setWatched((preWatched) => {
      return [...preWatched, movie];
    });
    console.log(watched)
  }

  return (
    <>

      {/* navbar is a structural coponent and Main is also a structural component */}
      <Navbar >
        <Logo />
        <SearchBox query={query} setQuery={setQuery} />
        <NumberResult movies={movies} />
      </Navbar>
      <Main >
        {<AllMoviesList movies={movies} handleSelected={handleSelected} loading={loading} error={error} handleWatchedMovie={handleWatchedMovie} />}
        {/* {!loading && !error ?<Loader/>:<AllMoviesList  movies={movies} />} */}
        <WatchedMovies watched={watched} setWatched={setWatched} selectdId={selectdId} handleCloseMovie={handleCloseMovie} />
      </Main>
    </>
  );
}
