import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import SocialFollow from "../SocialFollow/SocialFollow";

const AboutGestalt = () => {
  return (
    <StyledOuter>
      <StyledContainer className="animated fadeIn">
        <h3 style={{color: "white"}}>Gestalt</h3>
        <SocialFollow></SocialFollow>
      </StyledContainer>  
    </StyledOuter>
  );
}

export default AboutGestalt;