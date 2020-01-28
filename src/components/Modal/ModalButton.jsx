import React, { useState } from "react";
import styled from "styled-components";
import { Check } from "react-feather";

const ModalButton = ({ value, closeModalAction }) => {
    const [error, setError] = useState("");

    const saveBooking = () => {
      setError("");

      value = value.trim();
      if (!value) {
        return setError("Please enter a name");
      }

      const { name, email, phone, message } = value;

      closeModalAction();
    };

    return (
      <ButtonCont>
        <StyledButton tabIndex="0" onClick={saveBooking}>
          <Check />
          Send
        </StyledButton>
        <StyledError>{error}</StyledError>
        <StyledButton onClick={closeModalAction}>Cancel</StyledButton>
      </ButtonCont>
    );
  };


export default ModalButton;

const ButtonCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  z-index: 5;
  margin-top: 5px;
`;

const StyledButton = styled.button`
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
    transform: scale(1.001);
    position: relative;
    line-height: 2rem;
    -webkit-box-shadow: 0px 6px 25px 0px rgba(105, 39, 255, 0.5);
    -moz-box-shadow:    0px 6px 25px 0px rgba(105, 39, 255, 0.5);
    box-shadow:         0px 6px 25px 0px rgba(105, 39, 255, 0.5);
    background-color: #6927ff;
    color: #E5F3F3;
    font-size: 0.9rem
    min-width:  225px;
    min-height: 55px
    border: none;
    font-weight: 800;
    
	&:hover, &:focus, &:active {
		opacity: 0.8;
  }
  
  svg {
        height: 1.2rem;
        width: 1.2rem;
        opacity: 0.5;
        position: absolute;
        right: 10%;
        top: 32.5%;
  }

  @media screen and (max-width: 500px) {
    max-width: 275px;
    min-width: 275px;
    margin: 0 auto;
    margin-top: 2rem;
  }

`;

const StyledError = styled.h5`
  text-align: center;
  min-height: 30px;
  color: #ed213a;
  margin-top: 2rem;
`;

const StyledCancel = styled.a`
  text-align: center;
  margin-top: 2rem;
  color: #9e9e9e;
  font-size: 1.25rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.25px;
  position: relative;

  @media screen and (max-width: 500px) {
    margin-top: 1rem;
  }
`;