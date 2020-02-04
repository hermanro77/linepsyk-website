import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import Header from "../../commons/Header";

const Therapy = () => {
    return (
      <StyledOuter>
        <StyledContainer className="animated fadeIn">
          <Header text={"Terapi"}></Header>
          
        </StyledContainer>   
      </StyledOuter>
      
    );
}

export default Therapy;