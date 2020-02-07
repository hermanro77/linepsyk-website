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
      <MetaTags>
        <title>Line Psykoterapaut i Fredrikstad | Kontakt</title>
        <meta name="description" content="Kontakt meg gjerne for å bestille time eller dersom du lurer på noe angående terapi. Finn kontaktinformasjonen min her." />
      </MetaTags>
      <StyledContainer className="animated fadeIn">
        <Header text={"Kontakt"} quote={q1}></Header>
        <Footer contactpage={true}></Footer>
      </StyledContainer>
    </StyledOuter> 
    : 
    <>
    <MetaTags>
        <title>Line Psykoterapaut i Fredrikstad | Kontakt</title>
        <meta name="description" content="Kontakt meg gjerne for å bestille time eller dersom du lurer på noe angående terapi. Finn kontaktinformasjonen min her." />
      </MetaTags>
    <ContactTransition></ContactTransition>
    <Div>
      <Padding>
        <Header color={"white"} text={"Kontakt"}></Header>
        <Footer></Footer>
      </Padding>
    </Div>
    </>
    }
    </>
  );
}

export default Contact;

const Div = styled.div`
  background: #96e9b0;
  opacity: 0.85;
  margin: -2rem;
  opacity: 1;

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