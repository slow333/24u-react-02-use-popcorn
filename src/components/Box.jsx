import React, {useState} from 'react';
import styled from "styled-components";
import ButtonToggle from "../styles/ButtonToggle.jsx";

const StyledBox = styled.div`
  width: 42rem;
  max-width: 42rem;
  background-color: var(--color-background-500);
  border-radius: 0.9rem;
  position: relative;
  //overflow-y: auto;
`;

const Box = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
     <StyledBox>
         <ButtonToggle onClick={() => setIsOpen((open) => !open)} >
           {isOpen ? "–" : "+"}
         </ButtonToggle>
       {isOpen && children}
     </StyledBox>
  );
};

export default Box;