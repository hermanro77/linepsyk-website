import React from "react";
import styled from "styled-components";

const NavbarButton = ({ text }) => { 

    return (
        <StyledButton>
          {text}
        </StyledButton>
    );

}

export default NavbarButton;

const StyledButton = styled.button`
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1em;
  padding: 0.25em 1em;
  border: none;
  font-weight: bold;
  outline: 0;

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
  }
`;