import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useWindowDimensions from "../../commons/CustomHooks";
import ModalButton from "./ModalButton";
import "../../commons/style.scss";

const ModalForm = ({ closeModalAction }) => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { width, height } = useWindowDimensions();
  
  return (
    <>
      <StyledHorCont>
        <StyledVerticalCont>
          <StyledInput
            placeholder="Navn"
            autoFocus={width > 768}
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
        
      <StyledTextArea
          placeholder="Melding"
          onChange={({ target }) => setValue(prev => ({
            ...prev,
            message: target.value
          }))}
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
  width: auto;
  margin: 0 10px 0 10px;

  @media screen and (max-width: 768px){
    width: 100%;
  }
`;

const StyledHorCont = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 5;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  min-height: fit-content;

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
  min-height: 2rem;
  max-height: 2rem;
  padding: 26.5px 8px;
  border: 1.5px solid #9e9e9e;
  margin: 0 0 5px 0;

  &::placeholder {
    opacity: 0.7;
  }
  &:focus,
  &:active {
    border: 1.5px solid #6927ff;
    box-shadow: 0 0 0 2px #837dff;
  }

  @media screen and (max-width: 768px) {
    max-width: 95%;
    min-width: 95%;
    margin: 0 auto 5px auto;
    min-height: 2rem;
  }
`;

const StyledTextArea = styled.textarea`
  outline: none;
  background-image: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  border-radius: 4px;
  transition: 0.3s ease-in-out;
  min-height: 100%;
  max-height: 100%;
  margin: 0 10px 5px 10px;
  padding: 16px 8px;
  border: 1.5px solid #9e9e9e;
  width: 100%;

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

  @media screen and (max-width: 768px) {
    max-width: 95%;
    min-width: 95%;
    margin: 0 auto 5px auto;
    min-height: 2rem;
    height: 200px;
  }
`;