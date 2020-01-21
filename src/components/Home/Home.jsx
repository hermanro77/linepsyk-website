import React from "react";
import Welcome from "./Welcome";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import SocialFollow from "../SocialFollow/SocialFollow";

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
          <SocialFollow/>
        </StyledContainer>   
      </StyledOuter>
      
    );
}

export default Home;