import React from "react";
import styled from "styled-components";

const Burger = ({open, onClick}) => {

  return (
    <StyledBurger open={open} onClick={onClick}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </StyledBurger>
  );
}

export default Burger;

const StyledBurger = styled.div`
  display: none;
  cursor: pointer;
  
  @media screen and (max-width: 768px){
    display: block;
  }

  div{
    width: 30px;
    height: 4px;
    margin: 5px;
    border-radius: 2px;
    transition: all 0.4s linear;

    background: ${({ open }) => open ? 'linear-gradient(to right, #43c6ac, #f8ffae)' : 'rgb(226, 226, 226)'};
    

    :first-child{
      transform: ${({ open }) => open ? 'rotate(45deg) translate(5px,7px)' : 'rotate(0)'};
    }
    :nth-child(2){
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3){
      transform: ${({ open }) => open ? 'rotate(-45deg) translate(5px,-7px)' : 'rotate(0)'};
    }
  }
  &:hover div{
    background: linear-gradient(to right, #43c6ac, #f8ffae);
  }

  
`;