import React from "react";
import StyledList, {Div, H3, Img, P} from "../styles/StyledList.jsx";
import StyledListContainer from "../styles/StyledListContainer.jsx";

function MovieSearchList({movies, sendId, id}) {

  return (
     <StyledListContainer>
       {movies?.map((movie) => (
          <StyledList select={id === movie.imdbID} type='button' key={movie.imdbID}
                      onClick={() => sendId(movie.imdbID)}>
            <Img src={movie.Poster} alt={`${movie.Title} poster`}/>
            <H3>{movie.Title}</H3>
            <Div>
              <P>
                <span>🗓</span>
                <span>{movie.Year}</span>
              </P>
            </Div>
          </StyledList>
       ))}
     </StyledListContainer>
  );
}

export default MovieSearchList;