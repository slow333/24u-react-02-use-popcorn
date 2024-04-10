import React from 'react';
import StyledListWatched from "../styles/StyledListWatched.jsx";

import StyledList, {Div, H3, Img, P} from "../styles/StyledList.jsx";
import {usePopcorn} from "../context/PopcornContext.jsx";

const MovieWatchedList = () => {

  const {watched} = usePopcorn();

  return (
       <StyledListWatched>
         {watched.map((movie) => (
              <StyledList key={movie.imdbID}>
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
                    <span>{movie.Runtime.split(" ")[0]} min</span>
                  </P>
                </Div>
              </StyledList>
         ))}
       </StyledListWatched>
  );
};

export default MovieWatchedList;