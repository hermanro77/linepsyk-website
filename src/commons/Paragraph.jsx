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
      <div style={{display: "flex", justifyContent: "center"}}>
      <StyledLesMer show={show} onClick={() => setShow(!show)}>
        <p>Les {!show ? "mer" : "mindre"}</p>
        {show ? <ChevronUp /> : <ChevronDown />}
      </StyledLesMer>
      </div>
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
  max-width: fit-content;
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

  @media screen and (max-width: 768px){
    background: palevioletred;
    color: white;
    border-radius: 6px;
    min-width: 50%;
    max-height: fit-content;
    margin-top: 1rem;

    &:focus{
      cursor: pointer;
      color: palevioletred;
      background: white;
    }
    &:hover{
      *{
        color: white;
      }
    }

  }
`;

const StyledParagraph = styled.div`
  text-align: center;
  align-items: center; 
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
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical; 
  }
`;


const TexContainer = styled.div`
  text-align: left;
  color: white;
  margin: 1rem 0 0 0;
  padding: 0 1rem;

  ${({showfullcontent}) => showfullcontent ? css`${activeStyles}` : css`${noneActiveStyles2}`}
`;
