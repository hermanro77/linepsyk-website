import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import Header from "../../commons/Header";


const AboutLine = () => {
  return (
    <StyledOuter>
      <StyledContainer className="animated fadeIn">
        <Header text={"om Line"}></Header>
        
      </StyledContainer>
    </StyledOuter> 
  );
}

export default AboutLine;