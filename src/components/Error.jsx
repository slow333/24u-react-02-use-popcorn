import React from 'react';
import styled from "styled-components";

const StyledError = styled.div`
  text-align: center;
  font-size: 2rem;
  padding: 4.8rem;
`

const Error = ({children}) => {
  return (
       <StyledError>
         {children}
       </StyledError>
  );
};

export default Error;