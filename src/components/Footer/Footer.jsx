import React from "react";
import SocialFollow from "../SocialFollow/SocialFollow";
import Map from "../GoogleMaps/Map";
import styled from "styled-components";

const Footer = () => {

  return(
    <StyledDiv>
      <Map></Map> 
      <SocialFollow></SocialFollow>
    </StyledDiv>
  );
}

export default Footer;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  align-items: center;
  width: auto;
  height: auto;

  @media screen and (max-width: 768px){
    flex-direction: column;
    div{
      width: 100%;
    }
  }
`;