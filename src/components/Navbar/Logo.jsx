import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = () => {

    return (
        <StyledLogo to={"/"}>
          <img alt="" src="images/onlinelogomaker-012120-2235-9444.png" />
        </StyledLogo>
    );
}

export default Logo;

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  height: 10vh;
  max-width: 17vw;

  @media screen and (max-width: 900px){
    max-width: 25vw;
  }

  @media screen and (max-width: 768px){
    max-width: 35vw;
  }

  @media screen and (max-width: 450px){
    max-width: 50vw;
  }

  img {
    width: 100%;
    height: 90%;

    &:hover {
      transform: translateY(-1px);
    }
  }
  
`;