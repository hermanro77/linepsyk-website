import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import SocialFollow from "../SocialFollow/SocialFollow";
import Map from "../GoogleMaps/Map";

const Contact = () => {
  return (
    <StyledOuter>
      <StyledContainer className="animated fadeIn">
        <h3 style={{color: "white"}}>Kontakt</h3>
        <div style={{ height: "auto", width: "auto" }}>
          <Map></Map> 
        </div>
        <SocialFollow></SocialFollow>
      </StyledContainer>  
    </StyledOuter>
  );
}

export default Contact;