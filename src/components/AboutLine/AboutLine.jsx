import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import SocialFollow from "../SocialFollow/SocialFollow";

const AboutLine = () => {
  return (
    <StyledOuter>
      <StyledContainer className="animated fadeIn">
        <h3 style={{color: "white"}}>Hello my name is Line</h3>
        <SocialFollow></SocialFollow>
      </StyledContainer>
    </StyledOuter> 
  );
}

export default AboutLine;