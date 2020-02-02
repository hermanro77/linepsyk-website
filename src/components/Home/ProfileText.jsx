import React from "react";
import styled, { keyframes } from "styled-components";


const ProfileText = () => {
  return(
      <StyledText>
        <div>
          Line
        </div>
        <div>
          Psykoterapaut
        </div>
      </StyledText>
  );
}

export default ProfileText;


export const StyledText = styled.div`
  margin-top: 2rem;
  padding: 0;
  font-size: 2.5em;
  font-weight: 900;
  color: #fff;
  overflow: hidden;

  @media screen and (max-width: 950px){
    font-size: 1.5em;
  }
`;

export const StyledSpan = styled.span`
  display: inline-block;
`;

