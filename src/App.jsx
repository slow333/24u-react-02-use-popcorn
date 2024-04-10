import styled from "styled-components";
import {PopcornProvider, usePopcorn} from "./context/PopcornContext.jsx";
import Box from "./components/Box.jsx";
import MovieSearchList from "./components/MovieSearchList.jsx";
import MovieWatchedSummary from "./components/MovieWatchedSummary.jsx";
import MovieWatchedList from "./components/MovieWatchedList.jsx";
import Navbar from "./components/Navbar.jsx";
import Loader from "./components/Loader.jsx";
import Error from "./components/Error.jsx";
import MovieDetails from "./components/MovieDetails.jsx";

const Main = styled.div`
   margin-top: 2.4rem;
   height: calc(100vh - 7.2rem - 3 * 2.4rem);
   display: flex;
   gap: 2.4rem;
   justify-content: center;
`

function App() {

  const {
    id, movies, loadingMovie, errorMovie,
    movieDetail, errorDetail, loadingDetail
  } = usePopcorn();

  return (
    <>
      <Navbar/>
      <Main>
        <Box>
          {errorMovie && <Error>{errorMovie}</Error>}
          {loadingMovie && <Loader/>}
          {!loadingMovie && movies.length > 0 && <MovieSearchList/>}
        </Box>
        {id && <Box>
          {errorDetail && <Error>{errorDetail}</Error>}
          {loadingDetail && <Loader/>}
          {movieDetail && <MovieDetails/>}
        </Box>}
        {!id &&
          <Box>
            <MovieWatchedSummary/>
            <MovieWatchedList/>
          </Box>}
      </Main>
    </>
  );
}


export default App
