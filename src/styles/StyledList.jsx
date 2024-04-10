import styled from "styled-components";

const StyledList = styled.li`
   background-color: ${(props) => props.select === true ? "var(--color-background-100)": ''};
  position: relative;
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 2.4rem;
  font-size: 1.6rem;
  align-items: center;

  padding: 1.6rem 3.2rem;
  border-bottom: 1px solid var(--color-background-100);
  &:hover {
    cursor: pointer;
    background-color: var(--color-background-100);
  }
`;
export const Img = styled.img`
  width: 100%;
  grid-row: 1 / -1;
`;
export const H3 = styled.h3`
  font-size: 1.8rem;
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;
export const P = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export default StyledList;