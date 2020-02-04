import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import Footer from "../Footer/Footer";
import ResponsivePlayer from "./ResponsivePlayer";

const AboutGestalt = () => {
  return (
    <StyledOuter>
      <StyledContainer className="animated fadeIn">
        <ResponsivePlayer url={"https://www.youtube.com/watch?v=NXBRbdQYCqA"} />
        
      </StyledContainer>  
    </StyledOuter>
  );
}

export default AboutGestalt;