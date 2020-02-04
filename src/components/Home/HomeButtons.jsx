import React, { useEffect } from "react";
import { StyledVerticalContainer } from "../Footer/Info";
import { ButtonCont } from "../Modal/ModalButton";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { dispatch, useGlobalState } from "../../Store/State";
import useWindowDimensions from "../../commons/CustomHooks";

const showModalAction = () => dispatch({
  type: "showModalAction"
});

const setPage = (pageNum) => dispatch({
  page: pageNum,
  type: 'setPage',
});

const HomeButtons = () => {
  
  const {width} = useWindowDimensions();

  return(
    <ButtonCont>
      <StyledVerticalContainer className={width > 768 ? "animated bounceInDown" : ""}>
        <HomeButton to={"/om-gestalt"} transformup={"true"}>
          <StyledSpan>O</StyledSpan>
          <StyledSpan>m&nbsp;</StyledSpan>
          <StyledSpan>g</StyledSpan>
          <StyledSpan>e</StyledSpan>
          <StyledSpan>s</StyledSpan>
          <StyledSpan>t</StyledSpan>
          <StyledSpan>a</StyledSpan>
          <StyledSpan>l</StyledSpan>
          <StyledSpan>t</StyledSpan>
        </HomeButton>
        <HomeButton to={"/om-line"} transformup={"true"}>
          <StyledSpan>O</StyledSpan>
          <StyledSpan>m&nbsp;</StyledSpan>
          <StyledSpan>l</StyledSpan>
          <StyledSpan>i</StyledSpan>
          <StyledSpan>n</StyledSpan>
          <StyledSpan>e</StyledSpan>
        </HomeButton>
        <HomeButton to={"/terapi"} transformup={"true"}>
          <StyledSpan>T</StyledSpan>
          <StyledSpan>e</StyledSpan>
          <StyledSpan>r</StyledSpan>
          <StyledSpan>a</StyledSpan>
          <StyledSpan>p</StyledSpan>
          <StyledSpan>i</StyledSpan>
        </HomeButton>
      </StyledVerticalContainer>
      <StyledVerticalContainer className={width > 768 ? "animated bounceInDown delay-1s" : ""}>
        <HomeButton to={"/praktisk-info"} transformdown={"true"}>
          <StyledSpan>P</StyledSpan>
          <StyledSpan>r</StyledSpan>
          <StyledSpan>a</StyledSpan>
          <StyledSpan>k</StyledSpan>
          <StyledSpan>t</StyledSpan>
          <StyledSpan>i</StyledSpan>
          <StyledSpan>s</StyledSpan>
          <StyledSpan>k&nbsp;</StyledSpan>
          <StyledSpan>i</StyledSpan>
          <StyledSpan>n</StyledSpan>
          <StyledSpan>f</StyledSpan>
          <StyledSpan>o</StyledSpan>
        </HomeButton>

        <HomeButton to={"/kontakt"} transformdown={"true"}>
          <StyledSpan>K</StyledSpan>
          <StyledSpan>o</StyledSpan>
          <StyledSpan>n</StyledSpan>
          <StyledSpan>t</StyledSpan>
          <StyledSpan>a</StyledSpan>
          <StyledSpan>k</StyledSpan>
          <StyledSpan>t</StyledSpan>
        </HomeButton>

        <BestillTimeButton onClick={() => showModalAction()} transformdown={"true"}>
          <StyledSpan>B</StyledSpan>
          <StyledSpan>e</StyledSpan>
          <StyledSpan>s</StyledSpan>
          <StyledSpan>t</StyledSpan>
          <StyledSpan>i</StyledSpan>
          <StyledSpan>l</StyledSpan>
          <StyledSpan>l&nbsp;</StyledSpan>
          <StyledSpan>t</StyledSpan>
          <StyledSpan>i</StyledSpan>
          <StyledSpan>m</StyledSpan>
          <StyledSpan>e</StyledSpan> 
        </BestillTimeButton>
      </StyledVerticalContainer>
    </ButtonCont>
  );
}

export default HomeButtons;
const StyledSpan = styled.span`
  display: inline-block;
`;

const HomeButton = styled(Link)`
  font-size: 1rem
  min-width:  225px;
  min-height: 55px;
  border: none;
  font-weight: 800;
  margin-top: 2rem;
  padding: 0.25rem 1rem;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  align-items: center;
  letter-spacing: 1.25px;
  border-radius: 4px;
  transition: 0.3s ease-in-out;
  background-color: transparent;
  color: white;
  font-family: 'Permanent Marker', cursive;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  transform: ${({transformup}) => transformup ? "translateY(-45px)" : ""};
  transform: ${({transformdown}) => transformdown ? "translateY(45px)" : ""};

  &:hover {
    background: transparent;
    font-size: 1.3rem;
    color: white;
  }

  @media screen and (max-width: 768px){
    transform: none;
    background: linear-gradient(to right, #43c6ac, #f8ffae);

    &:hover, &:active{
      background: linear-gradient(to right, #43c6ac, #f8ffae);
      color: rgba(20, 20, 20, 0.8);
      font-size: 1.2rem;
    }

  }
`;

const BestillTimeButton = styled.div`
  font-size: 1rem
  min-width:  225px;
  min-height: 55px;
  border: none;
  font-weight: 800;
  margin-top: 2rem;
  padding: 0.25rem 1rem;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  text-align: center;
  align-items: center;
  letter-spacing: 1.25px;
  border-radius: 4px;
  transition: 0.3s ease-in-out;
  background-color: transparent;
  color: white;
  font-family: 'Permanent Marker', cursive;
  transform: ${({transformup}) => transformup ? "translateY(-45px)" : ""};
  transform: ${({transformdown}) => transformdown ? "translateY(45px)" : ""};
  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &:hover {
    background: transparent;
    font-size: 1.3rem;
    color: white;
  }
  
  @media screen and (max-width: 768px){
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
    font-family: 'Permanent Marker', cursive;
    transform: scale(1.001);
    position: relative;
    line-height: 2rem;
    -webkit-box-shadow: 0px 6px 25px 0px rgba(105, 39, 255, 0.5);
    -moz-box-shadow:    0px 6px 25px 0px rgba(105, 39, 255, 0.5);
    box-shadow:         0px 6px 25px 0px rgba(105, 39, 255, 0.5);
    background-color: #6927ff;
    color: #E5F3F3;
    font-size: 1rem
    min-width:  225px;
    min-height: 55px;
    border: none;
    font-weight: 800;
    
    &:focus, &:hover {
      background-color: #6927ff;
      font-size: 1.2rem;
      color: rgba(20, 20, 20, 0.8);
    }

    svg {
      height: 1.2rem;
      width: 1.2rem;
      opacity: 0.5;
      position: absolute;
      right: 10%;
      top: 32.5%;
    }

  }
`;
    /*
    For grønn knapp
    transform: none;
    background: linear-gradient(to right, #43c6ac, #f8ffae);

    &:hover, &:active{
      background: linear-gradient(to right, #43c6ac, #f8ffae);
      color: rgba(20, 20, 20, 0.8);
      font-size: 1.2rem;
    }
    */