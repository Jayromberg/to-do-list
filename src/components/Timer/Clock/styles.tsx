import styled from "styled-components";

export const NumberClock = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #5D677C;
  box-shadow: 2px 2px 4px #2B2B2B inset;
  height: 3.6rem;
  width: 3rem;
  padding: 8px 4px;
  border-radius: 10px;

  @media screen and (min-width:1280px) {
    height: 10.8rem;
    width: 9rem;
  }
`
export const DivisionClock = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4.2rem;

  @media screen and (min-width:1280px) {
    height: 12.6rem;
  } 
`