import React from "react";
import { Link } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import styled from "styled-components";

const Navbar = () => {

    return (
        <StyledNavbarContainer>
          
          <StyledLink to={"/"}>
            <NavbarButton text={"Hjem"} />
          </StyledLink>
          
          <StyledLink to={"/om-gestalt"}>
            <NavbarButton text={"Om gestalt"} />
          </StyledLink>
          
          <StyledLink to={"/om-line"}>
            <NavbarButton text={"Om Line"} />
          </StyledLink>
          
          <StyledLink to={"/kontakt"}>
            <NavbarButton text={"Kontakt"} />
          </StyledLink>
        
        </StyledNavbarContainer>
    );
}

export default Navbar;

const StyledNavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 12px;
  min-height: calc(8vh);
  max-height: calc(8vh);
  width: 100%;
  z-index: 1;
  position: fixed;
  background-color: rgba(20, 20, 20, 0.9);
`;

const StyledLink = styled(Link)`
  display: "block";
`;