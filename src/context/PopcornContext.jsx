import {createContext, useContext, useEffect, useState} from "react";
import useGetMovies from "../hooks/useGetMovies.js";
import useGetMovieById from "../hooks/useGetMovieById.js";

const PopcornContext = createContext();

function PopcornProvider({children}) {

  const [query, setQuery] = useState("");
  const [id, setId] = useState(null);

  const [watched, setWatched] = useState([]);
  const [userRating, setUserRating] = useState(0);


  const {movies, loading: loadingMovie, total, error: errorMovie} = useGetMovies(query)
  const {movieDetail, error: errorDetail, loading: loadingDetail} = useGetMovieById(id);

  function handleId(getId) {
    if(id === null || getId !== id) setId(getId)
    else setId(id ? null : getId);
  }

  function handleAddWatched(addedWatched) {
    if(watched.find(watched => watched.imdbID === addedWatched.imdbID)) {
      return setId(null)
    }
    setWatched(watched => [...watched, {...addedWatched, userRating: userRating }])
    setId(null);
    setUserRating(0);
  }

  useEffect(() => {
    if(watched.length > 0)
      localStorage.setItem("watchedMovies", JSON.stringify(watched))
  }, [watched]);
  useEffect(() => {
    const lcMovies = localStorage.getItem("watchedMovies");
    if(lcMovies === null) return;
    setWatched(JSON.parse(lcMovies));
  },[])

  return(
    <PopcornContext.Provider value={{
      query, id, watched, userRating, setQuery, setUserRating,
      movies, loadingMovie, total, errorMovie,
      movieDetail,errorDetail, loadingDetail,
      handleId, handleAddWatched
    }}>
      {children}
    </PopcornContext.Provider>
  )
}

function usePopcorn() {
  const context = useContext(PopcornContext);
  if(context === undefined) throw new Error("context outside");
  return context
}

export {usePopcorn, PopcornProvider}