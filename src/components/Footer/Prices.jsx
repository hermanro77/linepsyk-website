import React from "react";
import { StyledVerticalContainer } from "./Info";
import styled from "styled-components";
import { useGlobalState } from "../../Store/State";

const Prices = () => {
  const [page, setPage] = useGlobalState("page");

  return(
    <StyledVerticalContainer>
      <StyledP page={page}><StyledH2>750kr/60 minutter</StyledH2></StyledP>
      <StyledP page={page}><StyledH2>25% student rabatt</StyledH2></StyledP>
      <StyledP page={page}><StyledH2>For mer info send meg gjerne en melding</StyledH2></StyledP>
    </StyledVerticalContainer>

  );
}

export default Prices;


const StyledP = styled.div`
  text-align: left;
  border-top: 2px dashed;
  border-color: ${({page}) => page === 5 ? "#96e9b0 !important" : "white !important"};
  margin:0; padding: 30px;
  counter-increment: section;
  position: relative;

  &:nth-child(odd) {
    border-left: 2px dashed;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    margin-right: 30px; 
    padding-right: 0;
    max-height: 95px;
    width: auto;
  }

  &:nth-child(even) {
    border-right: 2px dashed;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-left: 30px; 
    padding-left: 0;
    max-height: 95px;
    width: auto;
  }

  &:first-child {
    border-top: 0;
    border-top-right-radius:0;
    border-top-left-radius:0;
  }

  &:last-child {
    border-bottom-right-radius:0;
    border-bottom-left-radius:0;
  }

  @media screen and (max-width: 768px){
    border-color: ${({page}) => page === 5 ? "#96e9b0 !important" : "white !important"};
  }
`;

const StyledH2 = styled.p`
  font-size: 1.7vw;
  color: white;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 3.5vw;
    font-weight: 600;
  }
  @media screen and (max-width: 600px) {
    font-size: 4.5vw;
    font-weight: 600;
  }
`;