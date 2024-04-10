import {useEffect, useState} from 'react'
import Box from "./components/Box.jsx";
import MovieSearchList from "./components/MovieSearchList.jsx";
import MovieWatchedSummary from "./components/MovieWatchedSummary.jsx";
import MovieWatchedList from "./components/MovieWatchedList.jsx";
import styled from "styled-components";
import Navbar from "./components/Navbar.jsx";
import Loader from "./components/Loader.jsx";
import useGetMovies from "./hooks/useGetMovies.js";
import Error from "./components/Error.jsx";
import useGetMovieById from "./hooks/useGetMovieById.js";
import MovieDetails from "./components/MovieDetails.jsx";

const Main = styled.div`
  margin-top: 2.4rem;
  height: calc(100vh - 7.2rem - 3 * 2.4rem);
  display: flex;
  gap: 2.4rem;
  justify-content: center;
`

function App() {

  const [query, setQuery] = useState("");
  const [id, setId] = useState(null);

  const [watched, setWatched] = useState([]);
  const [userRating, setUserRating] = useState(0)

  const { movies, loading: loadingMovie, total, error: errorMovie} = useGetMovies(query)
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

  return (
     <>
       <Navbar query={query} setQuery={setQuery} movies={movies} total={total}/>
       <Main>
         <Box>
           {errorMovie && <Error>{errorMovie}</Error>}
           {loadingMovie && <Loader/>}
           {!loadingMovie && movies.length > 0 &&
                <MovieSearchList movies={movies} id={id} sendId={handleId}/>}
         </Box>
         {id && <Box>
           {errorDetail && <Error>{errorDetail}</Error>}
           {loadingDetail && <Loader/>}
           {movieDetail &&
             <MovieDetails
               movieDetail={movieDetail}
               onAddWatched={handleAddWatched}
               rating={userRating} setRating={setUserRating}
               watched={watched}
             />}
         </Box>}
         {!id && <Box>
           <MovieWatchedSummary watched={watched}/>
           <MovieWatchedList watched={watched}/>
         </Box>}
       </Main>
     </>
  );
}


export default App
