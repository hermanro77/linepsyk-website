import styled from 'styled-components';
import React from 'react';

const ParagraphHeader = ({text}) => {
  return (
      <StyledParagraphHeader>{text}</StyledParagraphHeader>
  );
}

export default ParagraphHeader;

const StyledParagraphHeader = styled.h1`
font-family: 'Permanent Marker', cursive;
font-size: 20px;
text-transform: capitalize;
color: palevioletred;

@media screen and (max-width: 768px) {
  font-size: 15px;
}
`;