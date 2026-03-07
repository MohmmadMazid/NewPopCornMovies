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
import { useMovies } from "./customHook/useMovies";






export default function App() {
  const [query, setQuery] = useState("");
  // const [movies, setMovies] = useState(tempMovieData);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectdId, setSelectdId] = useState(null);
  const watchedMoviesFromLocalStorage = JSON.parse(localStorage.getItem('watched'))||[];
  const [watched, setWatched] = useState(watchedMoviesFromLocalStorage);


  const KEY = "328a19de";

  
    const handleCloseMovie = () => {
      setSelectdId(null);
  
    }

    // useEffect(() => {
      //   // abortcontroller will cancel the unwanted network request 
      //   const controller = new AbortController();
      //   const fetchMovie = async () => {
        //     setLoading(true);
        //     try {
          
        //       const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller.signal })
        //       // const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller })
        
        //       const data = await res.json();
        //       setLoading(false);
        //       setMovies(data?.Search || []);
        //     } catch (err) {
          //       if (err.name !== "AbortError") {
            //         console.error(err);
            //       }
            //     }
            //   }
            //   handleCloseMovie();
            //   fetchMovie();
            //   // clean up function for canceling the unwanted newtwork request
            //   return () => {
              //     controller.abort();
              //   }
              // }, [query])


  // instead of using the above code to fetch the movie detail we write the custom hook to fetch the movies detail
  const[movies,loading]=useMovies(query,handleCloseMovie)

   // this for the selecting the movie 
  const handleSelected = (id) => {
    setSelectdId((selectdId) => id === selectdId ? null : id)
  }

  // this function is for closing the movie

  // this function is for the adding the watched movie into the watched movie array 

  const handleWatchedMovie = (movie) => {

    setWatched((preWatched) => {
      // const updatedwatched = [...preWatched,movie]
      // localStorage.setItem('watched',JSON.stringify(updatedwatched))
      return [...preWatched, movie];
      // return updatedwatched;
    });
  }

  const handleDeleteWatchedMovie = (id) => {
    // const afterDeletingwatchedMoviedata = JSON.parse(localStorage.getItem('watched')).filter((movie)=>movie.imdbID!==id)
    setWatched((watched) => (watched.filter((movie) => (movie.imdbID !== id))));
    // localStorage.setItem('watched',JSON.stringify(afterDeletingwatchedMoviedata))
    // setWatched(JSON.parse(localStorage.getItem('watched')))
  }


  // this will help to remove the items from the localStorage 
    
  useEffect(()=>{
    localStorage.setItem('watched',JSON.stringify(watched))
  },[watched])
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
        <WatchedMovies watched={watched} setWatched={setWatched} selectdId={selectdId} handleCloseMovie={handleCloseMovie} handleWatchedMovie={handleWatchedMovie} handleDeleteWatchedMovie={handleDeleteWatchedMovie} />
      </Main>
    </>
  );
}
