import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import Footer from "../Footer/Footer";
import ResponsivePlayer from "./ResponsivePlayer";
import Paragraph from "../../commons/Paragraph";
import { faUser, faLightbulb, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { User } from "react-feather";
import Header from "../../commons/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { q1 } from "../../commons/Quotes";
import Contact from "../Contact/Contact";
import MetaTags from 'react-meta-tags';

const AboutGestalt = () => {

  const grunnleggende_ideer = "De grunnleggende ideer i gestaltterapi er at hvert menneske selv er ansvarlig for sine valg og handlinger innenfor de begrensninger omgivelsene gir. Gestaltterapi har utviklet metoder for å bevisstgjøre mennesker på egne følelser, reaksjoner og handlinger slik at de tydeligere kan erkjenne og se seg selv og sine valg. " +
  "\nDenne bevisstgjøringen skapes gjennom samtale, eksperimenter og rollespill. Metodene brukes også til bearbeidelse av tidligere, uferdige opplevelser (som blir kalt uavsluttede gestalter), kriser og i egenutvikling. " +
  "Gestaltterapi bygger på den tro at økt erkjennelse om seg selv skjer i øyeblikket, i situasjoner der klient og terapeut møtes. Det kan ikke planlegges inn i fremtiden, men kommer spontant i arbeidet mellom klient og terapeut.";
  
  const terapautens_rolle = "Et av de viktigste redskapene i gestaltterapi er terapeuten selv. Terapeuten er ikke objektiv eller nøytral, men er selv villig til å gå klienten i møte i et JEG – DU forhold. Dette betyr at det er viktig for terapeuten å bearbeide egne uferdige opplevelser for å kunne være tilgjengelig for det klienten trenger i situasjonen som oppstår. Gestaltterapi er derfor en opplevelsesorientert, prosessorientert og eksperimentell psykoterapi.";
  
  const egner_seg_for = "Gestaltterapi egner seg både for individual-, par- og gruppeterapi, egenutvikling, i undervisning, ledelse, organisasjonsarbeide og i konsulentarbeid. Klienter, studenter og kursdeltakere får selv erfare hvordan de er i møte med andre.\n Gestaltterapi er ingen lettvint eller hurtig «kur». Det kan være smertefullt og vondt å gjenoppleve tidligere episoder i livet, erkjenne seg selv der en er i livet, se egne begrensninger og ta valg. Det kan også være berikende, meningsfullt og inspirerende. Gestaltterapi er en terapeutisk retning som har spredning over hele verden, og er en av de mest utbredte psykoterapeutiske retninger i dag. Gestaltterapi har også fått en solid forankring innen næringsliv, bedriftsledelse, bedriftsrådgivning og alle former for opplæring."

  return (
    <StyledOuter>
      <MetaTags>
        <title>Line Psykoterapaut i Fredrikstad | Om Gestaltterapi</title>
        <meta name="description" content="Gestaltterapi egner seg både for individual-, par- og gruppeterapi, egenutvikling, i undervisning, ledelse, organisasjonsarbeide og i konsulentarbeid. Les mer om gestaltterapi her." />
      </MetaTags>
      <StyledContainer style={{textAlign: "center"}} className="animated fadeIn">

        <Header text={"om gestalt"} quote={q1}></Header>

        <StyledHorizontalContainer>
          <ResponsivePlayer url={"https://www.youtube.com/watch?v=NXBRbdQYCqA"} />
          <ResponsivePlayer url={"https://www.youtube.com/watch?v=2ca8P2eGppg"} />
        </StyledHorizontalContainer>

        <StyledHorizontalContainer>
          <Paragraph displayLesMer headertext={"Grunnleggende ideer"} text={grunnleggende_ideer}>
          <FontAwesomeIcon style={{color: "#96e9b0", height: "24px"}} icon={faLightbulb}></FontAwesomeIcon>
          </Paragraph>

          <Paragraph displayLesMer headertext={"Terapautens rolle"} text={terapautens_rolle}>
          <User style={{color: "#96e9b0"}}></User>
          </Paragraph>

          <Paragraph displayLesMer headertext={"Hvem egner gestaltterapi seg for?"} text={egner_seg_for}>
          <FontAwesomeIcon style={{color: "#96e9b0", height: "24px"}} icon={faQuestion}></FontAwesomeIcon>
          </Paragraph>
        </StyledHorizontalContainer>
        
        <Contact></Contact>
      
      </StyledContainer>   
    </StyledOuter>
  );
}

export default AboutGestalt;

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