import React, { useState } from "react";
import styled from "styled-components";

import ModalButton from "./ModalButton";
import "../../commons/style.scss";

const ModalForm = ({ closeModalAction }) => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <>
      <StyledHorCont>
      <StyledVerticalCont>
        <StyledInput
          placeholder="Navn"
          autoFocus={true}
          onChange={({ target }) => setValue(prev => ({
            ...prev,
            name: target.value
          }))}
        />
        <StyledInput
          placeholder="Email"
          onChange={({ target }) => setValue(prev => ({
            ...prev,
            email: target.value
          }))}
        />
        <StyledInput
          placeholder="Tlf"
          onChange={({ target }) => setValue(prev => ({
            ...prev,
            phone: target.value
          }))}
        />
      </StyledVerticalCont>
      <StyledInput
          placeholder="Message"
          onChange={({ target }) => setValue(prev => ({
            ...prev,
            message: target.value
          }))}
          message
        />
      </StyledHorCont>
      <ModalButton value={value} closeModalAction={closeModalAction} />
    </>
  );
};

export default ModalForm;

const StyledVerticalCont = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 5;
  width: 100%;
  height: fit-content;
  margin: 0 10px 0 10px;
`;

const StyledHorCont = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 5;
  align-items: center;
  width: 100%;
  height: fit-content;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

const StyledInput = styled.input`
  outline: none;
  background-image: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  border-radius: 4px;
  transition: 0.3s ease-in-out;
  min-height: ${({message}) => message ? "100%" : "2rem"};
  max-height: ${({message}) => message ? "100%" : "2rem"};
  padding: 26.5px 8px;
  border: 1.5px solid #9e9e9e;
  margin: ${({message}) => message ? "0 10px 5px 10px" : "0 0 5px 0"};

  &::placeholder {
    opacity: 0.7;
    top: 0;
    left: 0;
  }
  &:focus,
  &:active {
    border: 1.5px solid #6927ff;
    box-shadow: 0 0 0 2px #837dff;
  }

  @media screen and (max-width: 500px) {
    max-width: 275px;
    min-width: 275px;
    margin: 0 auto;
  }
`;