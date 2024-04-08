import React from 'react';
import StyledListWatched from "../styles/StyledListWatched.jsx";

import ListStyle, {Div, H3, Img, P} from "../styles/ListStyle.jsx";

const MovieWatchedList = ({watched}) => {
  return (
       <StyledListWatched>
         {watched.map((movie) => (
              <ListStyle key={movie.imdbID}>
                <Img src={movie.Poster} alt={`${movie.Title} poster`}/>
                <H3>{movie.Title}</H3>
                <Div>
                  <P>
                    <span>⭐️</span>
                    <span>{movie.imdbRating}</span>
                  </P>
                  <P>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                  </P>
                  <P>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                  </P>
                </Div>
              </ListStyle>
         ))}
       </StyledListWatched>
  );
};

export default MovieWatchedList;