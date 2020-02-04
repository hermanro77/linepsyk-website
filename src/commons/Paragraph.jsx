import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ChevronDown, ChevronUp } from "react-feather";
import ParagraphHeader from "./ParagraphHeader";

const Paragraph = ({ headertext, text, children }) => {
  const [show, setShow] = useState(false);
  return(
    <StyledParagraph>
      {children}
      <ParagraphHeader text={headertext}></ParagraphHeader>
      
      <TexContainer showfullcontent={show}>
        {text.split('\n').map((item, key) => {
          return <span key={key}>{item}<br/><br/></span>
        })}
      </TexContainer>
      
      <StyledLesMer show={show} onClick={() => setShow(!show)}>
        <p>Les {!show ? "mer" : "mindre"}</p>
        {show ? <ChevronUp /> : <ChevronDown />}
      </StyledLesMer>
    </StyledParagraph>
  );
}

export default Paragraph;

const StyledLesMer = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
   
  line-height: 0.1em;
  margin: 0 0 20px;
  color: ${({show}) => show ? "palevioletred" : "white"};

  span { 
    background:#fff; 
    padding:0 10px; 
  }

  &:hover{
    cursor: pointer;
    color: ${({show}) => show ? "white" : "palevioletred"};
    
    * {
      color: ${({show}) => show ? "white" : "palevioletred"};
    }
  }
`;

const StyledParagraph = styled.div`
  text-align: center;
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


const TexContainer = styled.div`
  text-align: left;
  color: white;
  margin: 2rem 0 0 0;

  ${({showfullcontent}) => showfullcontent ? css`${activeStyles}` : css`${noneActiveStyles}`}
`;

const OuterTextContainer = styled.div`
  overflow-y: visible;
`;