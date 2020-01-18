import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";

const AboutLine = () => {
  return (
    <StyledOuter>
      <StyledContainer className="animated fadeIn">
        <text style={{color: "white"}}>Hello my name is Line</text>
      </StyledContainer>  
    </StyledOuter> 
  );
}

export default AboutLine;