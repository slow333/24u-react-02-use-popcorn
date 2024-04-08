import {useEffect, useState} from 'react'
import {getWatchedData} from "./data/movieData.js";
import Box from "./components/Box.jsx";
import MovieSearchList from "./components/MovieSearchList.jsx";
import MovieWatchedSummary from "./components/MovieWatchedSummary.jsx";
import MovieWatchedList from "./components/MovieWatchedList.jsx";
import styled from "styled-components";
import Navbar from "./components/Navbar.jsx";
import {URL} from "./components/config.js";
import Loader from "./components/Loader.jsx";
import useGetMovies from "./hooks/useGetMovies.js";
import Error from "./components/Error.jsx";
import useGetMovieById from "./hooks/useGetMovieById.js";

const Main = styled.div`
  margin-top: 2.4rem;
  height: calc(100vh - 7.2rem - 3 * 2.4rem);
  display: flex;
  gap: 2.4rem;
  justify-content: center;
`

function App() {

  const average = (arr) =>
       arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const [query, setQuery] = useState("");

  const [id, setId] = useState("");

  const [watched, setWatched] = useState(getWatchedData);

  const { movies, loading: loadingMovie, total, error: errorMovie} = useGetMovies(query)
  const {movieDetail, error: errorDetail, loading: loadingDetail} = useGetMovieById(id);
  function handleId(id) {
    setId(id ? '' : id);
  }
  return (
       <>
         <Navbar query={query} setQuery={setQuery} movies={movies} total={total}/>
         <Main>
           <Box>
             {errorMovie && <Error>{errorMovie}</Error>}
             {loadingMovie && <Loader/>}
             {!loadingMovie && movies.length > 0 &&
                  <MovieSearchList movies={movies} setId={handleId}/>}
           </Box>
           {id && <Box>

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
