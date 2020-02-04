import React from "react";
import { StyledOuter, StyledContainer } from "../../commons/StyledComponents";
import Footer from "../Footer/Footer";
import ResponsivePlayer from "./ResponsivePlayer";
import Paragraph from "../../commons/Paragraph";
import { faUser, faLightbulb, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { User } from "react-feather";
import Header from "../../commons/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutGestalt = () => {
  return (
    <StyledOuter>
      <StyledContainer className="animated fadeIn">
        {//<ResponsivePlayer url={"https://www.youtube.com/watch?v=NXBRbdQYCqA"} />
        }
        <Header text={"om gestalt"}></Header>
        
        <Paragraph headertext={"Grunnleggende ideer"} text={"De grunnleggende ideer i gestaltterapi er at hvert menneske selv er ansvarlig for sine valg og handlinger innenfor de begrensninger omgivelsene gir. Gestaltterapi har utviklet metoder for å bevisstgjøre mennesker på egne følelser, reaksjoner og handlinger slik at de tydeligere kan erkjenne og se seg selv og sine valg. " +
        "\nDenne bevisstgjøringen skapes gjennom samtale, eksperimenter og rollespill. Metodene brukes også til bearbeidelse av tidligere, uferdige opplevelser (som blir kalt uavsluttede gestalter), kriser og i egenutvikling. " +
        "Gestaltterapi bygger på den tro at økt erkjennelse om seg selv skjer i øyeblikket, i situasjoner der klient og terapeut møtes. Det kan ikke planlegges inn i fremtiden, men kommer spontant i arbeidet mellom klient og terapeut. "}>
        <FontAwesomeIcon style={{color: "palevioletred"}} icon={faLightbulb}></FontAwesomeIcon>
        </Paragraph>

        <Paragraph headertext={"Terapautens rolle"} text={"Et av de viktigste redskapene i gestaltterapi er terapeuten selv. Terapeuten er ikke objektiv eller nøytral, men er selv villig til å gå klienten i møte i et JEG – DU forhold. Dette betyr at det er viktig for terapeuten å bearbeide egne uferdige opplevelser for å kunne være tilgjengelig for det klienten trenger i situasjonen som oppstår. Gestaltterapi er derfor en opplevelsesorientert, prosessorientert og eksperimentell psykoterapi."}>
        <User style={{color: "palevioletred"}}></User>
        </Paragraph>

        <Paragraph headertext={"Hvem egner gestaltterapi seg for?"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
        + " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
        + " nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"
        + " in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint"
        + " occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}>
        <FontAwesomeIcon style={{color: "palevioletred"}} icon={faQuestion}></FontAwesomeIcon>
        </Paragraph>

      </StyledContainer>  
    </StyledOuter>
  );
}

export default AboutGestalt;