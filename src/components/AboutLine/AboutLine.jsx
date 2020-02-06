import React from "react";
import { StyledOuter, StyledContainer, ContactTransition } from "../../commons/StyledComponents";
import Header from "../../commons/Header";
import Paragraph from "../../commons/Paragraph";
import {q2} from "../../commons/Quotes";
import styled from "styled-components";
import { User, Eye, Award } from "react-feather";
import Profile from "../Home/Profile";
import Contact from "../Contact/Contact";

const AboutLine = () => {

  const om_meg_intro = "Jeg er en del av et felleskap i Mosseveien 3, Fredrikstad. Jeg tilbyr individuell samtaleterapi for ungdommer og voksne. Du er hjertelig velkommen til å ta kontakt med meg om du lurer på noe eller vil bestille en time!";
  const bakgrunn = <>Jeg er utdannet ved <StyledA href="https://gestalt.no/">Norsk Gestaltinstitutts Høyskole</StyledA>, er medlem av <StyledA href="https://ngfo.no/">Norsk Gestaltterapeutforening (NGF)</StyledA> og er forpliktet på deres <StyledA href="https://ngfo.no/etiske-prinsipper-gestaltterapeuter-ngf/">etiske retningslinjer</StyledA>. Det betyr blant annet at jeg har taushetsplikt og at jeg får veiledning som medvirker til faglig kvalitet. Parallelt med min gestaltpraksis jobber jeg med barn, ungdom og deres familier inne psykisk helse. Jeg har 16 års erfaring med arbeid innen barnevern og psykisk helse, med spesiell kompetanse knyttet til skadelig seksuell atferd og traumerelaterte opplevelser. Jeg var ferdig utdannet barneverpedagog i 1995, og har videreutdanning i Tiltak mot seksuelle overgrep fra høyskolen i Østfold. I 2015 var jeg ferdig utdannet Gestaltterapeut. </>;
  const fokus = "Noen ganger kan det være godt å snakke med en utenforstående om utfordringer eller vanskeligheter du bærer på gjennom livet. En som kan hjelpe deg å se din situasjon, åpne opp for muligheter og som ikke sitter på en fasit om hvem du er eller hva du skal/ bør gjøre. " +
  "I terapirommet er jeg opptatt av å bruke metoder for bevisstgjøring, da mange av våre følelser, tanker, ønsker og indre konflikter ikke er i fokus. Ubevisste prosesser kan påvirke oss og skape symptomer og problemer i livet. Derfor vil vi i terapi jobbe med å få større innsikt i egne indre prosesser og forstå oss selv bedre. " +
  "Følelser/tema som kan dukke opp i terapirommet kan være angst, depresjon eller nedstemthet, sorg, utmattelse, vanskelige valg og dårlig selvfølelse. Dette er menneskers naturlige reaksjonsmønstre når livet blir komplisert og våre tidligere reaksjons- og handlingsmønster ikke lenger er hensiktsmessige og funksjonelle for oss. Jeg er opptatt av å finne måter for best mulig ivaretagelse og fungering i hverdagen og vektlegger ivaretagelse, trygghet, og tillit som en grunnleggende pilar for alt endringsarbeid";
  const målet = "Målet er muligheten til bedre å kunne takle kompleksiteten i livet, bidra til større trygghet og å stå fri til å gjøre egne valg. Gjennom dette kan opplevelsen av et større nærvær, mer glede og øket livskvalitet oppstå. Det finnes ingen mal for hva som er rett eller galt, bra eller dårlig. Det handler om å våge å se på egne valg og handlinger, samt relasjonene du er en del av. Som terapeut har jeg fokus på din medvirkning, og i det terapeutiske rommet har vi tid til å møte hverandre i respekt og åpenhet.";
  return (
    <StyledOuter>
      <StyledContainer className="animated fadeIn">
        <Header text={"om Line"} quote={q2}></Header>
        <StyledHorizontalContainer>
        <Div>
          <StyledImg src="images/image2.jpg"></StyledImg>
        </Div>
        <Div>
          <DivText>
            <Paragraph text={om_meg_intro}></Paragraph>
          </DivText>
        </Div>
        </StyledHorizontalContainer>
        <StyledHorizontalContainer>
          <Paragraph displayLesMer comp={bakgrunn} headertext={"Min bakgrunn"}><User style={{color: "#96e9b0"}} /></Paragraph>
          <Paragraph displayLesMer text={fokus} headertext={"Mitt fokus"}><Eye style={{color: "#96e9b0"}} /></Paragraph>
          <Paragraph displayLesMer text={målet} headertext={"Hva er målet med terapi?"}><Award style={{color: "#96e9b0"}}/></Paragraph>
        </StyledHorizontalContainer>

        <Contact></Contact>
      </StyledContainer>
    </StyledOuter> 
  );
}

export default AboutLine;

const StyledA = styled.a`
  //text-decoration: none;
  color: #96e9b0;
`;

const StyledImg = styled.img`
  border-radius: 4px;
  height: 400px;
  width: 300px;
`;

const DivText = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px){
    width: 100%;
  }
`;
const Div = styled.div`
  width: 50%;
  align-items: center;
  justify-content: center;
  

  @media screen and (max-width: 768px){
    width: 100%;
    margin-bottom: 2rem;
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