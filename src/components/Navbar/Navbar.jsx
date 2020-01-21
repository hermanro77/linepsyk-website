import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import Burger from "../Burger/Burger";

const Navbar = () => {

    const [burgerOpen, setBurgerOpen] = useState(false);

    return (
      <StyledNavbarContainer>
        <Logo></Logo>

        <StyledLinkContainer open={burgerOpen} className={burgerOpen ? "animated fadeInRight" : ""}>
          
          <StyledLink to={"/"} onClick={() => setBurgerOpen(!burgerOpen)}>
            Hjem
          </StyledLink>
          
          <StyledLink to={"/om-gestalt"} onClick={() => setBurgerOpen(!burgerOpen)}>
            Om gestalt
          </StyledLink>
          
          <StyledLink to={"/om-line"} onClick={() => setBurgerOpen(!burgerOpen)}>
            Om Line
          </StyledLink>
          
          <StyledLink to={"/kontakt"} onClick={() => setBurgerOpen(!burgerOpen)}>
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
  padding: 0 10px 0 10px;

  @media screen and (max-width: 970px){
    width: 60%;
  }

  @media screen and (max-width: 768px){
    position: absolute;
    right: 0px;
    height: 90vh;
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
  color: rgba(255, 255, 255, 0.6);
  font-size: 1em;
  padding: 0.25em 1em;
  border: none;
  font-weight: bold;
  outline: 0;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &:hover {
    cursor: pointer;
    background: linear-gradient(
      rgba(95, 241, 105, 0.4),
      rgba(95, 241, 105, 0.5),
      rgba(95, 241, 105, 0.6),
      rgba(95, 241, 105, 0.7),
      rgba(95, 241, 105, 0.8)
    ); //palevioletred
    color: white;
    border-radius: 3px;
  
  &:active{
    background: linear-gradient(
      rgba(95, 241, 105, 0.4),
      rgba(95, 241, 105, 0.5),
      rgba(95, 241, 105, 0.6),
      rgba(95, 241, 105, 0.7),
      rgba(95, 241, 105, 0.8)
    );
  }
`; 