import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import Footer from "../Footer/Footer";
import ResponsivePlayer from "./ResponsivePlayer";

const AboutGestalt = () => {
  return (
    <StyledOuter>
      <StyledContainer className="animated fadeIn">
        <h3 style={{color: "white"}}>Gestalt</h3>
        <ResponsivePlayer url={"https://www.youtube.com/watch?v=NXBRbdQYCqA"} />
        <Footer></Footer>
      </StyledContainer>  
    </StyledOuter>
  );
}

export default AboutGestalt;