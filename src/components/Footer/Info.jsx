import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { dispatch } from "../../Store/State";

const showModalAction = () => dispatch({
  type: "showModalAction"
});

const Info = () => {


  return(
    <StyledVerticalContainer>
      <StyledMailLink href={"mailto:rommetline@gmail.com"}>
        <StyledFontAwesomeIcon icon={faEnvelope}></StyledFontAwesomeIcon>
        <h1>rommetline@gmail.com</h1>
      </StyledMailLink>
      
      <StyledMailLink href={"https://www.google.com/maps/place/Trondalsveien+22,+1621+Gressvik/@59.2184606,10.8826493,17z/data=!3m1!4b1!4m5!3m4!1s0x464402a3561247af:0xb8aec454f8284e1e!8m2!3d59.2184606!4d10.884838"}> 
        <StyledFontAwesomeIcon icon={faMapMarkerAlt}></StyledFontAwesomeIcon>
        <h1>Trondalsveien 22</h1>
      </StyledMailLink>

      <StyledMailLink href={"tel:+4798476555"}>
        <StyledFontAwesomeIcon icon={faPhone}></StyledFontAwesomeIcon>
        <h1>98476555</h1>
      </StyledMailLink>

      <StyledMailLink onClick={() => showModalAction()}>
        <StyledFontAwesomeIcon icon={faMoneyCheck}></StyledFontAwesomeIcon>
        <h1>Bestill time</h1>
      </StyledMailLink>
    </StyledVerticalContainer>
  );
}

export default Info;

export const StyledMailLink = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  &:not(:last-child){
    margin-bottom: 5px;
  }

  &:hover {
    cursor: pointer;
    background: linear-gradient(to right, #43c6ac, #f8ffae);
    color: rgba(20, 20, 20, 0.7);
    border-radius: 4px;
    margin-right: 10px;
    
    h1{
      color: rgba(20, 20, 20, 0.8);
    }
    *{
      color: rgb(20, 20, 20);
    }
  }

  *:not(:last-child) {
    margin-right: 30px;
  }

  @media screen and (max-width: 768px){
    font-size: 2.5vw;
    background: linear-gradient(to right, #43c6ac, #f8ffae);
    width: 100%;
    border-radius: 4px;
    color: rgba(20, 20, 20, 0.7);
    margin-bottom: 5px;
    
    h1{
      color: rgba(20, 20, 20, 0.8);
    }
    *{
      color: rgb(20, 20, 20);
    }
    *:not(:last-child) {
      margin-right: 15px;
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
  min-height: 40px; 
  min-width: 40px;
  color: white;
`; 

export const StyledVerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  
  @media screen and (max-width: 768px){
    width: 100%;
  }
`; 