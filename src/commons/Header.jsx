import styled from 'styled-components';
import React from 'react';

const Header = ({text}) => {
  return (
      <StyledHeader>{text}</StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.h1`
  margin: 2rem auto;
  font-size: 2.5rem;
  font-weight: 600;
  font-family: 'Permanent Marker', cursive;
  text-transform: uppercase;
  color: white;
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;