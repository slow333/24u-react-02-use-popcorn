import React from 'react';
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 7.2rem;
  padding: 0 3.2rem;
  background-color: var(--color-primary);
  border-radius: 0.9rem;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
const Span = styled.span`
  font-size: 3.2rem;
`;
const H1 = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #fff;
`;
const SearchInput = styled.input`
  justify-self: center;
  border: none;
  padding: 1.1rem 1.6rem;
  font-size: 1.8rem;
  border-radius: 0.7rem;
  width: 40rem;
  transition: all 0.3s;
  color: var(--color-text);

  /* background-color: var(--color-background-900); */
  background-color: var(--color-primary-light);
  &::placeholder {
    color: var(--color-text-dark);
  }
  &:focus {
    outline: none;
    box-shadow: 0 2.4rem 2.4rem rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;
const NumResults = styled.p`
  justify-self: end;
  font-size: 1.8rem;
`

const Navbar = ({query, setQuery, movies, total}) => {
  return (
       <StyledNavbar>
         <Logo>
           <Span role="img">🍿</Span>
           <h1>usePopcorn</h1>
         </Logo>
         <SearchInput
              type="text"
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
         />
         <NumResults>
           Found <strong>{total}</strong> results
         </NumResults>
       </StyledNavbar>
  );
};

export default Navbar;