import styled from 'styled-components';
import React from 'react';

const Header = ({text}) => {
  return (
      <StyledHeader>{text}</StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.h2`
  margin: auto;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;

  @media screen and (max-width: 600px) {
    font-size: 2.75rem;
    top: 14rem;
  }
`;