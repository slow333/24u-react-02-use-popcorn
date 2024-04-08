import StyledList from "../styles/StyledList.jsx";
import ListStyle, {Div, H3, Img, P} from "../styles/ListStyle.jsx";

function MovieSearchList({movies, setId}) {
  return (
       <StyledList>
         {movies?.map((movie) => (
              <ListStyle key={movie.imdbID} onClick={() => setId(movie.imdbID)}>
                <Img src={movie.Poster} alt={`${movie.Title} poster`}/>
                <H3>{movie.Title}</H3>
                <Div>
                  <P>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                  </P>
                </Div>
              </ListStyle>
         ))}
       </StyledList>
  );
}

export default MovieSearchList;