import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import Footer from "../Footer/Footer";

const Home = () => {

    return (
      
      <StyledOuter>
        <StyledContainer className="animated fadeIn">
          <Footer/>
        </StyledContainer>   
      </StyledOuter>
      
    );
}

export default Home;