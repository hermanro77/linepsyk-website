import React from "react";
import styled from "styled-components";
import ModalForm from "./ModalForm";

const ModalContent = ({ closeModalAction }) => {

  return (
      <Popup className="animated fadeInDown">
        <PopupInside>
          <Backgrounds>
            <Background1></Background1>
            <Background2></Background2>
            <Background3></Background3>
            <Background4></Background4>
            <Background5></Background5>
            <Background6></Background6>
          </Backgrounds>
          <StyledHeading>Bestill time</StyledHeading>
          <StyledDesc>
            En email vil sendes til Line og hun vil kontakte deg straks!
          </StyledDesc>
          <ModalForm closeModalAction={closeModalAction}></ModalForm>
        </PopupInside>
      </Popup>
  );
};

export default ModalContent;


const Popup = styled.div`
  height: 500px;
  width: 50%;
  border-radius: 3px;
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease 

  @media screen and (max-width:1100px){
    width: 85%;
  }
  
  @media screen and (max-width:768px){
    flex-direction: column;
    width: 85%;
  }
`;

const PopupInside = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: box-shadow 0.5s ease 0.7s, border-radius 0.35s ease 0.7s;
  border-radius: 10px;
  box-shadow: -50px 0 200px -50px #504bff, 50px 0 200px -50px #4cfa63;
  display: flex;
  align-items: center;
  flex-direction: column; 

  @media screen and (max-width:768px){
    background-color: white;
    flex-direction: column;
    overflow-y: scroll;
  }
`;

const Backgrounds = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  
  @media screen and (max-width:768px){
    position: sticky;
  }

`;

const Background1 = styled.div`
    --offset: 0;
    position: absolute;
    left: var(--offset);
    right: var(--offset);
    bottom: var(--offset);
    top: var(--offset);
    background: linear-gradient(to right, #504bff, #4cfa63);
    transform: scale(1);
    transition: all 0.5s ease 0s;
    border-radius: 50%;
`;

const Background2 = styled.div`
  --offset: 10%;
  position: absolute;
  left: var(--offset);
  right: var(--offset);
  bottom: var(--offset);
  top: var(--offset);
  background: linear-gradient(to right, #6665ff, #69fa7f);
  transform: scale(0);
  transition: all 0.5s ease 0.1s;
`;

const Background3 = styled.div`
  --offset: 20%;
  position: absolute;
  left: var(--offset);
  right: var(--offset);
  bottom: var(--offset);
  top: var(--offset);
  background: linear-gradient(to right, #8583ff, #85fa99);
  z-index: 2;
  transition: all 0.5s ease 0.2s;
`;
const Background4 = styled.div`
  --offset: 30%;
  position: absolute;
  left: var(--offset);
  right: var(--offset);
  bottom: var(--offset);
  top: var(--offset);
  background: linear-gradient(to right, #aaaaff, #a7fab7);
  z-index: 3;
  transition: all 0.5s ease 0.3s;
`;
const Background5 = styled.div`
  --offset: 40%;
  position: absolute;
  left: var(--offset);
  right: var(--offset);
  bottom: var(--offset);
  top: var(--offset);
  background: linear-gradient(to right, #c9c8ff, #c3fad1);
  transform: scale(6);
  z-index: 4;
  transition: all 0.5s ease 0.4s;
`;
const Background6 = styled.div`
  --offset: 40%;
  position: absolute;
  left: var(--offset);
  right: var(--offset);
  bottom: var(--offset);
  top: var(--offset);
  background: white;
  z-index: 5;
  transform: scale(8);
  transition: all 0.8s ease 0.4s;

  @media screen and (max-width:768px){
    display: none;
  }
`;




const StyledModalContent = styled.div`
  background-color: #ffffff;
  min-width: 700px;
  max-width: 700px;
  min-height: 650px;
  max-height: 650px;
  border-radius: 85% 15% 83% 17% / 12% 86% 14% 88%;
  position: absolute;
  top: calc(50% - 325px);
  left: 50%;
  transform: translate(-50%);
  box-shadow: 0px 30px 60px rgba(20, 20, 20, 0.5);
  animation: 0.3s ease-in fadeIn 1 forwards;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  z-index: 3;

  @media screen and (max-width: 800px) {
    min-width: 100%;
    max-width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    top: 0;
    border-radius: 0;
  }
`;

const StyledHeading = styled.h3`
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 1.8rem;
  margin-top: 1.5rem;
  z-index: 5;
  background: -webkit-linear-gradient(#a18cd1, #6927ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  

  @media screen and (max-width: 500px) {
    font-size: 1.45rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 1.25rem;
  }
`;

const StyledDesc = styled.p`
  text-align: center;
  color: #3c4588;
  max-width: 75%;
  margin: 1rem auto;
  margin-bottom: 2rem;
  z-index: 5;

  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
    min-width: 100%;
    margin-bottom: 1.2rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 0.8rem;
  }
`;