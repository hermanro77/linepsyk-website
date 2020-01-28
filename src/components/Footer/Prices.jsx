import React from "react";
import { StyledVerticalContainer } from "./Info";
import styled from "styled-components";

const Prices = () => {

  return(
    <StyledVerticalContainer>
      <StyledP><StyledH2>700kr/60 minutter</StyledH2></StyledP>
      <StyledP><StyledH2>25% student rabatt</StyledH2></StyledP>
      <StyledP><StyledH2>For mer info send meg gjerne mail eller ring</StyledH2></StyledP>
    </StyledVerticalContainer>

  );
}

export default Prices;


const StyledP = styled.div`

  border-top: 2px dashed;
  border-color: #43c6ac !important;
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

  }

  &:nth-child(even) {
    border-right: 2px dashed;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    margin-left: 30px; 
    padding-left: 0;
    max-height: 95px;

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
`;

const StyledH2 = styled.h2`
  font-size: 20px;
  background: -webkit-linear-gradient(#43c6ac, #f8ffae);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;