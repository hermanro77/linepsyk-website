import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import SocialFollow from "../SocialFollow/SocialFollow";

const Contact = () => {
  return (
    <StyledOuter>
      <StyledContainer className="animated fadeIn">
        <h3 style={{color: "white"}}>Kontakt</h3>
        <SocialFollow></SocialFollow>
      </StyledContainer>  
    </StyledOuter>
  );
}

export default Contact;