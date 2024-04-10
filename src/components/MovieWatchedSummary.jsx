import React from 'react';
import styled from "styled-components";

const Summary = styled.div`
  padding: 2.2rem 3.2rem 1.8rem 3.2rem;
  border-radius: 0.9rem;
  background-color: var(--color-background-100);
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;
const H2 = styled.h2`
  text-transform: uppercase;
  font-size: 1.6rem;
  margin-bottom: 0.6rem;
`
const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  font-size: 1.6rem;
  font-weight: 600;
`;
const P = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const MovieWatchedSummary = ({watched}) => {
  const average = (arr) =>
       arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.Runtime.split(" ")[0]));

  return (
       <Summary>
         <H2>Movies you watched</H2>
         <Div>
           <P>
             <span>#️⃣</span>
             <span>{watched.length} movies</span>
           </P>
           <P>
             <span>⭐️</span>
             <span>{avgImdbRating}</span>
           </P>
           <P>
             <span>🌟</span>
             <span>{avgUserRating}</span>
           </P>
           <P>
             <span>⏳</span>
             <span>{avgRuntime.toFixed(1)} min</span>
           </P>
         </Div>
       </Summary>
  );
};

export default MovieWatchedSummary;