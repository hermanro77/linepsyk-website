import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import SocialFollow from "../SocialFollow/SocialFollow";
import Map from "../GoogleMaps/Map";
import styled from "styled-components";

const Contact = () => {
  return (
    <StyledOuter>
      <StyledContainer className="animated fadeIn">
        <ContactDiv>
          <Map></Map> 
          <SocialFollow></SocialFollow>
        </ContactDiv>
      </StyledContainer>  
    </StyledOuter>
  );
}

export default Contact;

const ContactDiv = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  align-items: center;
  width: auto;
  height: auto;
`;