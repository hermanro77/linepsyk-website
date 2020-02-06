import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ChevronDown, ChevronUp } from "react-feather";
import ParagraphHeader from "./ParagraphHeader";

const Paragraph = ({ headertext, text, children, displayLesMer, style, comp }) => {
  const [show, setShow] = useState(false);
  return(
    <StyledParagraph style={style}>
      {children}
      <ParagraphHeader text={headertext}></ParagraphHeader>
      
      <TexContainer display={displayLesMer} showfullcontent={show}>
        {text ? text.split('\n').map((item, key) => {
          return displayLesMer ? <span key={key}>{item}<br/><br/></span> : <span key={key}>{item}<br/></span>
        }) : comp}
      </TexContainer>
      <div style={{display: "flex", justifyContent: "center"}}>
      <StyledLesMer display={displayLesMer} show={show} onClick={() => setShow(!show)}>
        {show ? <><ChevronUp/><p>Les mindre</p></> : <><p>Les mer</p><ChevronDown/></>}
      </StyledLesMer>
      </div>
    </StyledParagraph>
  );
}

export default Paragraph;

const StyledLesMer = styled.div`
  text-align: center;
  align-items: center;
  display: ${({display}) => display ? "flex" : "none"};
  flex-direction: column;
  line-height: 0.1em;
  margin: 1rem 0 20px;
  max-width: fit-content;
  color: white;

  &:hover, &:active, &:focus{
    cursor: pointer;
    color: #96e9b0;
    
    * {
      color: #96e9b0;
    }
  }

  @media screen and (max-width: 768px){
    background: transparent;
    color: white;
    border-radius: 6px;
    min-width: 30%;
    min-height: 1rem;
    margin-top: 1rem;
    justify-content: center;
    
    p {
      //display: none;
    }

    &:hover, &:focus, &:active{
      cursor: pointer;
      color: white;
      p {
        color: white;
      }
      * {
        color: white;
      }
    }

  }
`;

const StyledParagraph = styled.div`
  text-align: center;
  align-items: center;
  width: 100%; 
  margin-top: 1rem;

  @media screen and (max-width: 768px){
    width: 100%;
  }
`;

const activeStyles = `
  min-height: fit-content;
  overflow: visible;
`;

const noneActiveStyles = `
  max-height: 100px;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: visible;
  text-overflow: ellipsis;
`;

const noneActiveStyles2 = `
  width: 100%;
  overflow: hidden;

  p {
    margin: 0;
  }

  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical; 
  }
`;


const TexContainer = styled.div`
  text-align: left;
  color: white;
  margin: 1rem 0 0 0;
  padding: 0 1rem;

  ${({showfullcontent, display}) => showfullcontent || !display ? css`${activeStyles}` : css`${noneActiveStyles2}`}
`;
