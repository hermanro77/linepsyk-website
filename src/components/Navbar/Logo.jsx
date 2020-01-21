import React from "react";
import styled from "styled-components";

const Logo = () => {

    return (
      <StyledLogo className="logo">
        <h4>Line Gestaltterapaut</h4> 
        {
        //TODO: lag kul logo
        }
      </StyledLogo>
    );
}

export default Logo;

const StyledLogo = styled.div`
  color: rgb(226, 226, 226);
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 20px;
`;