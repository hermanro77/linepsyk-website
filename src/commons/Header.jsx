import styled from 'styled-components';
import React from 'react';

const Header = ({text, quote}) => {
  return (
    <Div>
      <StyledHeader>{text}</StyledHeader>
      <StyledQuote>{quote}</StyledQuote>
    </Div>
  );
}

export default Header;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const StyledHeader = styled.h1`
  margin: 0 0 2rem 0;
  font-size: 2.5rem;
  font-weight: 600;
  font-family: 'Permanent Marker', cursive;
  text-transform: uppercase;
  color: white;
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
const StyledQuote = styled.div`
  margin: 0 0 2rem 0;
  font-size: 1.5rem;
  font-weight: 300;
  font-family: 'Permanent Marker', cursive; 
  color: palevioletred;
  max-width: 85%;
  min-width: 85%;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
    min-width: 100%;
  }
`;