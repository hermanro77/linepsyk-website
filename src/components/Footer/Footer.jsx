import React from "react";
import SocialFollow from "./SocialFollow";
import Map from "./Map";
import styled from "styled-components";
import Info from "./Info";
import Prices from "./Prices";

const Footer = () => {

  return(
    <>
    <StyledDiv style={{marginBottom: "2rem"}}>
      <Info></Info>
      <Prices></Prices>
    </StyledDiv>
    <StyledDiv>
      <Map></Map> 
      <SocialFollow></SocialFollow>
    </StyledDiv>
    </>
  );
}

export default Footer;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: fit-content;

  @media screen and (max-width: 768px){
    flex-direction: column;
    div{
      width: 100%;
    }
  }
`;