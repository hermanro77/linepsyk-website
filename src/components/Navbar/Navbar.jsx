import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import Burger from "./Burger";

const Navbar = () => {

    const [burgerOpen, setBurgerOpen] = useState(false);

    return (
      <StyledNavbarContainer>
        <Logo></Logo>

        <StyledLinkContainer open={burgerOpen} className={burgerOpen ? "animated fadeInRight" : ""}>
          
          <StyledLink to={"/"} onClick={burgerOpen ? () => setBurgerOpen(!burgerOpen) : () => ""}>
            Hjem
          </StyledLink>
          
          <StyledLink to={"/om-gestalt"} onClick={burgerOpen ? () => setBurgerOpen(!burgerOpen) : () => ""}>
            Om gestalt
          </StyledLink>
          
          <StyledLink to={"/om-line"} onClick={burgerOpen ? () => setBurgerOpen(!burgerOpen) : () => ""}>
            Om Line
          </StyledLink>
          
          <StyledLink to={"/kontakt"} onClick={burgerOpen ? () => setBurgerOpen(!burgerOpen) : () => ""}>
            Kontakt
          </StyledLink>

        </StyledLinkContainer>

        <Burger open={burgerOpen} onClick={() => setBurgerOpen(!burgerOpen)}/>

      </StyledNavbarContainer>
    );
}

export default Navbar;

const StyledNavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: calc(10vh);
  max-height: calc(10vh);
  z-index: 1;
  width: 100%;
  position: fixed;
  background-color: rgba(20, 20, 20, 0.9);
  align-items: center;
`;

const StyledLinkContainer = styled.div`
  min-height: calc(10vh);
  width: 45%;
  display: flex;
  justify-content: space-around;
  background: transparent;
  align-items: center;

  @media screen and (max-width: 970px){
    width: 65%;
  }
  
  @media screen and (max-width: 900px){
    width: 100%;
  }

  @media screen and (max-width: 768px){
    position: absolute;
    right: 0px;
    height: 90vh;
    width: 50%;
    top: 10vh;
    background-color: rgba(20, 20, 20, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: ${({open}) => open ? "translateX(0%)" : "translateX(100%)"};
  }
`;

const StyledLink = styled(Link)`
  background: transparent;
  color: white;
  font-size: 1em;
  padding: 0.25rem 1rem;
  border: none;
  font-weight: bold;
  outline: 0;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &:hover {
    cursor: pointer;
    background: linear-gradient(to right, #43c6ac, #f8ffae);
    color: rgba(20, 20, 20, 0.8);
    border-radius: 4px;
  }

  @media screen and (max-width: 768px){
    width: 100%;
  }
`; 