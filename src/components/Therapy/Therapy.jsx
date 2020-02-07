import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import Header from "../../commons/Header";
import styled from "styled-components";
import Paragraph from "../../commons/Paragraph";
import { Users } from "react-feather";
import { q1 } from "../../commons/Quotes";
import Contact from "../Contact/Contact";
import MetaTags from 'react-meta-tags';

const Therapy = () => {
    const samtale_terapi = "Psykiske problemer oppstår når vi mister kontakten med våre grunnleggende følelser og behov. Vi mennesker er født med evnen til å oppleve et stort spekter av følelser, som glede, tristhet, sinne, frykt, stolthet, skam og kjærlighet. Hver av disse følelsene forteller oss noe om hva som er viktig for oss og hva vi trenger. Forskning har vist at følelsesmessig kvaliteten i samspill tidlig i livet, er med på å danne våre mønstre for regulering av følelser og sosial atferd senere i livet. Denne selvreguleringen, eller kreative tilpasningen, gjør seg gjeldende gjennom livet på en mer eller mindre hensiktsmessig måte.  Noen relasjonelle mønstre er etablert før vårt sanselige- og kognitive apparat var fullt utviklet. Dette kan gjøre dem vanskelig å forholde seg til på en oppmerksom og bevisst måte. Terapien gir oss mulighet til å la våre relasjonelle mønstre bli synliggjort i en terapeutisk relasjon. Der kan de bli bekreftet, språkliggjort og forstått.";
    return (
      <StyledOuter>
        <MetaTags>
          <title>Line Psykoterapaut i Fredrikstad | Praktisk info</title>
          <meta name="description" content="Jeg tilbyr individuell samtaleterapi for ungdommer og voksne. Les mer om priser og hvordan bestille time her." />
        </MetaTags>
        <StyledContainer className="animated fadeIn">
          <Header text={"Terapi"} quote={q1}></Header>
          <StyledHorizontalContainer>
            <Div>
            <Paragraph displayLesMer text={samtale_terapi} headertext={"Samtaleterapi"}><Users style={{color: "#96e9b0"}} /></Paragraph>
            </Div>
            <StyledImg src="images/therapy.jpg"></StyledImg>
          </StyledHorizontalContainer>

          <Contact></Contact>

        </StyledContainer>   
      </StyledOuter>
      
    );
}

export default Therapy;

const StyledImg = styled.img`
  border-radius: 4px;
  height: 250px;
  width: 400px;

  @media screen and (max-width: 768px){
    width: 100%;
    height: 100%;
  }
`;

const Div = styled.div`
  width: 50%;

  @media screen and (max-width: 768px){
    width: 100%;
  }
`;

const StyledHorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  
  @media screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
`;