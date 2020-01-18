import styled from 'styled-components';
import React from 'react';
import Header from "../../commons/Header";

const Welcome = () => {

  return (
    <Container>
      <Header text={"welcome"}></Header>
    </Container>
  );
}

export default Welcome;

const Container = styled.div`
  max-width: 50%;
  min-width: 50%;
`;