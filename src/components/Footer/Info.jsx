import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { dispatch } from "../../Store/State";

const showModalAction = () => dispatch({
  type: "showModalAction"
});

const Info = ({contactpage}) => {


  return(
    <StyledVerticalContainer>
      <StyledMailLink contactpage={contactpage} href={"mailto:rommetline@gmail.com"}>
        <StyledFontAwesomeIcon contactpage={contactpage} icon={faEnvelope}></StyledFontAwesomeIcon>
        <StyledH2>rommetline@gmail.com</StyledH2>
      </StyledMailLink>
      
      <StyledMailLink contactpage={contactpage} href={"https://www.google.com/maps/place/Mosseveien+3,+1610+Fredrikstad/@59.2173864,10.9198534,17z/data=!3m1!4b1!4m5!3m4!1s0x464402dccd5dba15:0xb4be64144be2f14f!8m2!3d59.2173864!4d10.9220421"}> 
        <StyledFontAwesomeIcon contactpage={contactpage} icon={faMapMarkerAlt}></StyledFontAwesomeIcon>
        <StyledH2>Mosseveien 3</StyledH2>
      </StyledMailLink>

      <StyledMailLink contactpage={contactpage} href={"tel:+4798476555"}>
        <StyledFontAwesomeIcon contactpage={contactpage} icon={faPhone}></StyledFontAwesomeIcon>
        <StyledH2>98476555</StyledH2>
      </StyledMailLink>

      <StyledMailLink contactpage={contactpage} onClick={() => showModalAction()}>
        <StyledFontAwesomeIcon contactpage={contactpage} icon={faMoneyCheck}></StyledFontAwesomeIcon>
        <StyledH2>Bestill time</StyledH2>
      </StyledMailLink>
    </StyledVerticalContainer>
  );
}

export default Info;

const StyledH2 = styled.p`
  font-size: 2vw;
  color: white;
  font-weight: 600;

  &:hover {
    font-size: 2.2vw;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.5vw;
    font-weight: 600;

    &:hover, &:active, &:focus {
      font-size: 3.5vw;
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 4.5vw;
    font-weight: 600;
    
    &:hover, &:active, &:focus {
      font-size: 4.5vw;
    }
  }
`;

export const StyledMailLink = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  margin-right: 10px;
  font-size: 1.2vw;
  max-height: 4rem;
  min-height: 4rem;
  max-width: fit-content;

  &:hover {
    cursor: pointer;
    font-size: 1.3vw;
  }

  *:not(:last-child) {
    margin-right: 30px;
  }

  @media screen and (max-width: 768px){
    font-size: 2.5vw;
    background: ${({contactpage}) => contactpage ? "linear-gradient(to right, #43c6ac, #f8ffae)" : "white"};
    width: 100%;
    border-radius: 4px;
    -webkit-text-fill-color: ${({contactpage}) => contactpage ? "rgba(20,20,20,0.8)" : "#96e9b0"};
    margin-bottom: 1rem;
    max-width: 100%;


    &:hover, &:focus, &:active {
      cursor: pointer;
      font-size: 2.5vw;
    }

    &:active {
      background: transparent;
      color: white;
      
      h1{
        color: white;
      }

      *{
        color: white;
      }
    }
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  min-height: 2rem;
  min-width: 2rem; 
  color: white;
  @media screen and (max-width: 768px){
    color: ${({contactpage}) => contactpage ? "rgba(20, 20, 20, 0.8)" : "#96e9b0"};
  }
`; 

export const StyledVerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  min-height: fit-content;
  
  @media screen and (max-width: 768px){
    width: 100%;
  }
`; 