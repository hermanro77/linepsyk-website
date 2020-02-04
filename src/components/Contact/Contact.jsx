import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import Footer from "../Footer/Footer";
import Header from "../../commons/Header";

const Contact = () => {
  return (
    <StyledOuter>
      <StyledContainer className="animated fadeIn">
        <Header text={"Kontakt"}></Header>
        <Footer></Footer>
      </StyledContainer>  
    </StyledOuter>
  );
}

export default Contact;