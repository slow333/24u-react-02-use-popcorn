import React from 'react';
import styled from "styled-components";

const StyledLoader = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 600;
  margin: 4.8rem;
`

const Loader = () => {
  return (
       <StyledLoader>
         Loading ...
       </StyledLoader>
  );
};

export default Loader;