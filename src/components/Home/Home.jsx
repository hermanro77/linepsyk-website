import React from "react";
import Welcome from "./Welcome";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import Footer from "../Footer/Footer";

const Home = () => {

    return (
      
      <StyledOuter>
        <StyledContainer className="animated fadeIn">
          <Welcome/>
          <Welcome/>
          <Welcome/>
          <Welcome/>
          <Welcome/>
          <Welcome/>
          <Welcome/>
          <Welcome/>
          <Welcome/>
          <Welcome/>
          <Welcome/>
          <Welcome/>
          <Welcome/>
          <Welcome/>
          <Welcome/>
          <Footer/>
        </StyledContainer>   
      </StyledOuter>
      
    );
}

export default Home;