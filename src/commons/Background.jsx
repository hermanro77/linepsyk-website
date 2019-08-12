import React from 'react';
import styled from "styled-components";

const Background = ({ name }) => {
    return (
        <>
					<StyledOuter backgroundName={name} />
        </>
    );
}

export default Background;

const StyledOuter = styled.main`
  display: flex;
  flex-direction: row;
  background-color: #34314f;
  position: relative;
  background-image: url("/images/river.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-block-size: -webkit-fill-available;
`;

