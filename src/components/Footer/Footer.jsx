import React from "react";
import SocialFollow from "./SocialFollow";
import Map from "./Map";
import styled from "styled-components";
import Info from "./Info";
import Prices from "./Prices";

const Footer = ({instagramcolor, contactpage}) => {

  const palevioletredtheme = {
    color: "palevioletred",

  }
  
  return(
    <>
    <StyledDiv style={{marginBottom: "2rem"}}>
      <Info contactpage={contactpage}></Info>
      <Prices></Prices>
    </StyledDiv>
    <StyledDiv>
      <Map></Map> 
      <SocialFollow contactpage={contactpage}></SocialFollow>
    </StyledDiv>
    </>
  );
}

export default Footer;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: fit-content;
  font-weight: 500;

  color: palevioletred;

  @media screen and (max-width: 768px){
    flex-direction: column;
    div{
      width: 100%;
    }
  }
`;