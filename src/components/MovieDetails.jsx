import React from 'react';
import styled from "styled-components";

const Details = styled.div`
  line-height: 1.4;
  font-size: 1.4rem;
`;
const Header = styled.header`
  display: flex;
`;
const Section = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const Img = styled.img`
  width: 33%;
`;
const Overview = styled.div`
  width: 100%;
  padding: 2.4rem 3rem;
  background-color: var(--color-background-100);
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const OverviewH2 = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 0.4rem;
  line-height: 1.1;
`;
const OverviewP = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
const Rating = styled.p`
  background-color: var(--color-background-100);
  border-radius: 0.9rem;
  padding: 2rem 2.4rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const MovieDetails = ({movieDetails}) => {
  const { Actors, Genre, Plot, Poster, Ratings, Runtime, Title, Year, imdbID, imdbRating}
       = movieDetails;
  console.log(movieDetails)
  return (
       <Details>
         <Header>{Title}</Header>
         <Section>
           <Img src={Poster} alt={Title}/>
           <Overview>
             <OverviewH2>{Actors}</OverviewH2>
             <OverviewP>{Plot}</OverviewP>
             <OverviewP>{Year}</OverviewP>
             <Rating>{Ratings}</Rating>
           </Overview>
         </Section>
         Movie Details
       </Details>
  );
};

export default MovieDetails;