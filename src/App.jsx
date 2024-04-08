import {useEffect, useState} from 'react'
import {getWatchedData} from "./data/movieData.js";
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
import movieDetails from "./components/MovieDetails.jsx";

const Main = styled.div`
  margin-top: 2.4rem;
  height: calc(100vh - 7.2rem - 3 * 2.4rem);
  display: flex;
  gap: 2.4rem;
  justify-content: center;
`

function App() {

  const [query, setQuery] = useState("");
  const [id, setId] = useState("");

  const [watched, setWatched] = useState(getWatchedData);

  const { movies, loading: loadingMovie, total, error: errorMovie} = useGetMovies(query)
  const {movieDetail, error: errorDetail, loading: loadingDetail} = useGetMovieById(id);
  function handleId(id) {
    setId(id ? null : id);
  }

  console.log(id)
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
           {errorDetail && <Error>{errorDetail}</Error>}
           {loadingDetail && <Loader/>}
           {movieDetail && <MovieDetails movieDetail={movieDetails} />}
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
