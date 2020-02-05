import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import Header from "../../commons/Header";
import Paragraph from "../../commons/Paragraph";
import { DollarSign, XCircle, ShoppingBag } from "react-feather";
import styled from "styled-components";
import { dispatch } from "../../Store/State";
import { q2 } from "../../commons/Quotes";

const showModalAction = () => dispatch({
  type: "showModalAction"
});

const Practicalinfo = () => {

    const timebestilling = "Send en e-post (rommetline@gmail.com), ta kontakt på telefon (98476555) eller benytt deg av 'bestill time' under hvis du lurer på noe eller vil bestille time. All informasjon du oppgir er taushetsbelagt og vil bli behandlet konfidensielt.";
    const betaling = `750,- for 60 minutter samtaleterapi\n 25% studentrabatt\n Vipps er å foretrekke, da kortautomat ikke er etablert. Betaling gjennomføres etter endt time. \nJeg har dessverre ingen refusjonsavtale gjennom frikortordningen.`;
    const avbestilling = "Det er vanskelig å fylle avbestilte timer på kort varsel, derfor er det fint om flytting av time eller avbestilling skjer så fort som mulig, senest 24 timer (1 virkedag) før avtalt time. Timer avbestilt eller byttet etter dette belastes klienten i sin helhet.";

    return (
      <StyledOuter>
        <StyledContainer className="animated fadeIn">
          <Header text={"Priser & info"} quote={q2}></Header>

          <StyledHorizontalContainer>
            
            <Paragraph headertext={"Betaling"} text={betaling}>
              <DollarSign style={{color: "palevioletred"}} />
            </Paragraph>

            <Paragraph headertext={"Timebestilling"} text={timebestilling}>
              <ShoppingBag style={{color: "palevioletred"}}></ShoppingBag>
            </Paragraph>            
            
            <Paragraph headertext={"Avbestilling"} text={avbestilling}>
              <XCircle style={{color: "palevioletred"}} />
            </Paragraph>
          </StyledHorizontalContainer>
          
          <StyledHorizontalContainer>
          <Button onClick={() => showModalAction()} transformdown={"true"}>
              <StyledSpan>B</StyledSpan>
              <StyledSpan>e</StyledSpan>
              <StyledSpan>s</StyledSpan>
              <StyledSpan>t</StyledSpan>
              <StyledSpan>i</StyledSpan>
              <StyledSpan>l</StyledSpan>
              <StyledSpan>l&nbsp;</StyledSpan>
              <StyledSpan>t</StyledSpan>
              <StyledSpan>i</StyledSpan>
              <StyledSpan>m</StyledSpan>
              <StyledSpan>e</StyledSpan> 
            </Button>
            </StyledHorizontalContainer>
        </StyledContainer>   
      </StyledOuter>
      
    );
}

export default Practicalinfo;

const StyledSpan = styled.span`
  display: inline-block;
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

const Button = styled.div`
font-size: 1rem
border: none;
font-weight: 800;
padding: 0.25rem 1rem;
cursor: pointer;
outline: none;
text-transform: uppercase;
text-align: center;
align-items: center;
letter-spacing: 1.25px;
border-radius: 4px;
transition: 0.3s ease-in-out;
background-color: transparent;
color: white;
font-family: 'Permanent Marker', cursive;
transform: ${({transformup}) => transformup ? "translateY(-45px)" : ""};
transform: ${({transformdown}) => transformdown ? "translateY(45px)" : ""};
display: flex;
align-items: center;
justify-content: center;
max-width: fit-content;
margin-bottom: 2rem;

&:hover {
  background: transparent;
  font-size: 1.3rem;
  color: white;
}

@media screen and (max-width: 768px){
  margin-top: 2rem;
  padding: 0.25rem 1rem;
  border: none;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  letter-spacing: 1.25px;
  border-radius: 4px;
  transition: 0.3s ease-in-out;
  font-family: 'Poppins', sans-serif;
  font-family: 'Permanent Marker', cursive;
  transform: scale(1.001);
  position: relative;
  line-height: 2rem;

  background-color: palevioletred;
  color: white;
  font-size: 1rem
  min-width:  225px;
  min-height: 55px;
  border: none;
  font-weight: 800;
  
  &:focus, &:hover {
    background-color: palevioletred;
    font-size: 1.2rem;
    color: rgba(20, 20, 20, 0.8);
  }

  svg {
    height: 1.2rem;
    width: 1.2rem;
    opacity: 0.5;
    position: absolute;
    right: 10%;
    top: 32.5%;
  }

}
`;