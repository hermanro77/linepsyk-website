import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
const SocialFollow = () => {

    return (
      <SocialFollowContainer>
        <Styledh3>Følg og les mer om meg her!</Styledh3>

        <StyledIconLink instagram={true} href={"https://www.instagram.com/linegestaltterapaut"}>
          <FontAwesomeIcon style={{height: "50px", width: "50px"}} icon={faInstagram}></FontAwesomeIcon>
        </StyledIconLink>

        <StyledIconLink href={"https://www.facebook.com/line.rommetveit"}>
          <FontAwesomeIcon style={{height: "50px", width: "50px"}} icon={faFacebook}></FontAwesomeIcon>
        </StyledIconLink>

      </SocialFollowContainer>
    );
}

export default SocialFollow;

const Styledh3 = styled.h3`
  color: white;
  font-style: italic;
  font-weight: 500;
`;

const SocialFollowContainer = styled.div`
  background-color: transparent;
  padding: 25px 50px;
  text-align: center;
  position: absolute;
  width: calc(95%);
`;

const StyledIconLink = styled.a`
  margin: 25px 25px;
  transition: transform 250ms;
  display: inline-block;
  color: ${props => props.instagram ? "palevioletred" : "#4968ad"};
  
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;