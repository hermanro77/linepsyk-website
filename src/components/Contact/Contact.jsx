import React from "react";
import { StyledOuter, StyledContainer, ContactTransition } from "../../commons/StyledComponents";
import Footer from "../Footer/Footer";
import Header from "../../commons/Header";
import styled from "styled-components";
import { useGlobalState } from "../../Store/State";
import { q1 } from "../../commons/Quotes";


const Contact = () => {
  const [page, setPage] = useGlobalState("page");
  
  const palevioletredtheme = {
    color: "palevioletred",

  }

  return (
    <>
    {page === 5 ? 
    <StyledOuter>
      <StyledContainer className="animated fadeIn">
        <Header text={"Kontakt"} quote={q1}></Header>
        <Footer instagramcolor={"palevioletred"}></Footer>
      </StyledContainer>
    </StyledOuter> 
    : 
    <>
    <ContactTransition></ContactTransition>
    <Div>
      <Padding>
        <Header text={"Kontakt"}></Header>
        <Footer instagramcolor={"white"}></Footer>
      </Padding>
    </Div>
    </>
    }
    </>
  );
}

export default Contact;

const Div = styled.div`
  background: palevioletred;
  opacity: 0.85;
  margin: -2rem;

  @media screen and (max-width: 768px){
    margin: -1.5rem;
  }

  @media screen and (max-width: 450px){
    margin: -1rem;
  }
`;

const Padding = styled.div`
  padding: 2rem;

  @media screen and (max-width: 768px){
    padding: 1.5rem;
  }

  @media screen and (max-width: 450px){
    padding: 1rem;
  }

`;