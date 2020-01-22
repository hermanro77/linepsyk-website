import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import Footer from "../Footer/Footer";

const AboutGestalt = () => {
  return (
    <StyledOuter>
      <StyledContainer className="animated fadeIn">
        <h3 style={{color: "white"}}>Gestalt</h3>
        <Footer></Footer>
      </StyledContainer>  
    </StyledOuter>
  );
}

export default AboutGestalt;