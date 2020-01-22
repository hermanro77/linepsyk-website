import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import Footer from "../Footer/Footer";

const AboutLine = () => {
  return (
    <StyledOuter>
      <StyledContainer className="animated fadeIn">
        <h3 style={{color: "white"}}>Hello my name is Line</h3>
        <Footer></Footer>
      </StyledContainer>
    </StyledOuter> 
  );
}

export default AboutLine;