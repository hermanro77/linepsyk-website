import React from "react";
import styled from 'styled-components';

const Home = () => {

    return (
      <StyledOuter className="animated fadeIn">
        <StyledContainer>
        
        </StyledContainer>  
      </StyledOuter>
    );
}

export default Home; 

const StyledContainer = styled.div`
  padding: 2rem;
  background-color: red;
  min-height: calc(90vh - 6rem);
  max-height: calc(90vh - 6rem);
  min-width: calc(95% - 12rem);
  max-width: calc(95% - 12rem);
  background-color: rgba(20, 20, 20, 0.75);
  border-radius: 6px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-left: 5rem;
  margin-right: auto;

  @media screen and (max-width: 1400px) {
    min-height: calc(94vh - 4rem);
    max-height: calc(94vh - 4rem);
    min-width: calc(85%);
    max-width: calc(85%);
    margin: auto;
    margin-top: 4rem;
  }

  @media screen and (max-width: 600px) {
    padding: 1.5rem;
  }
`;

const StyledOuter = styled.main`
  display: flex;
  flex-direction: row;
  background-color: #34314f;
  position: relative;
  background-image: url("/images/river.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-block-size: -webkit-fill-available;
`;