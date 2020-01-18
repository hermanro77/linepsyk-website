import React from "react";
import Welcome from "./Welcome";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";

const Home = () => {

    return (
      <StyledOuter>
        <StyledContainer className="animated fadeIn">
          <Welcome/>
        </StyledContainer>  
      </StyledOuter>
    );
}

export default Home;