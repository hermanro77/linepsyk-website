import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

const ResponsivePlayer = ({ url }) => {

  return(
    <Center>
      <StyledPlayerContainer>
        <StyledReactPlayer
          url={url}
          width="100%"
          height="100%"
        />
      </StyledPlayerContainer>
    </Center>
  );
}

export default ResponsivePlayer;

const Center = styled.div`
  padding: 50px 75px;

  @media screen and (max-width: 768px){
    padding: 25px 25px;
  }
`;

const StyledPlayerContainer = styled.div`
  position: relative;
  padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;