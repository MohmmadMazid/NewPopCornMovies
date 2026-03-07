import { useEffect ,useState} from "react";
import { tempMovieData } from "../moviesdata";

export function useMovies(query,handleCloseMovie){
      const KEY = "328a19de";

     const [movies, setMovies] = useState(tempMovieData);
     const [loading, setLoading] = useState(false);
      useEffect(() => {
        // abortcontroller will cancel the unwanted network request 
        const controller = new AbortController();
        const fetchMovie = async () => {
          setLoading(true);
          try {
    
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller.signal })
            // const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller })
    
            const data = await res.json();
            setLoading(false);
            setMovies(data?.Search || []);
          } catch (err) {
            if (err.name !== "AbortError") {
              console.error(err);
            }
          }
        }
        handleCloseMovie();
        fetchMovie();
        // clean up function for canceling the unwanted newtwork request
        return () => {
          controller.abort();
        }
      }, [query])

      return [movies,loading]
}

// best practive
/**
 
import { useEffect, useState } from "react";

export function useMovies(query, handleCloseMovie) {
  const KEY = "328a19de";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const controller = new AbortController();

    const fetchMovie = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        const data = await res.json();
        setMovies(data?.Search || []);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    handleCloseMovie();
    fetchMovie();

    return () => controller.abort();
  }, [query]);

  return [movies, loading];
}
 */