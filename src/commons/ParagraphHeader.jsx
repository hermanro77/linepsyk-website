import styled from 'styled-components';
import React from 'react';

const ParagraphHeader = ({text}) => {
  return (
      <StyledParagraphHeader>{text}</StyledParagraphHeader>
  );
}

export default ParagraphHeader;

const StyledParagraphHeader = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  color: white;
  //background: -webkit-linear-gradient(#43c6ac, #f8ffae);
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
  color: white;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;