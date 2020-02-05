import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import Profile from "./Profile";
import HomeButtons from "./HomeButtons";
import styled from "styled-components";
import AboutGestalt from "../AboutGestalt/AboutGestalt";
import AboutLine from "../AboutLine/AboutLine";
import Therapy from "../Therapy/Therapy";

const Home = () => {

    return (
      
      <StyledOuter>
        <StyledHomeContainer className="animated fadeIn">
          <HorizontalDiv className="animated fadeIn">
            <Profile />
            <HomeButtons />
          </HorizontalDiv>
        </StyledHomeContainer>   
      </StyledOuter>
      
    );
}

export default Home;

const StyledHomeContainer = styled(StyledContainer)`
  display: flex;
`;

const HorizontalDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;