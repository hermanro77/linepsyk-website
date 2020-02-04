import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import Burger from "./Burger";
import { dispatch, useGlobalState } from '../../Store/State';
import useWindowDimensions from "../../commons/CustomHooks";

const setPage = (pageNum) => dispatch({
  page: pageNum,
  type: 'setPage',
});

const Navbar = () => {
 
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [globalStatePage] = useGlobalState('page');

    useEffect(() => {
      setPathNameNum(window.location.pathname);
      renderNavbar();
    }, [window.location.pathname]);

    const setPathNameNum = (pathname) => {
      switch (pathname) {
        case '/hjem': 
          setPage(0);
          break;
        
        case '/om-gestalt': 
          setPage(1);
          break;
        
        case '/om-line': 
          setPage(2);
          break;
        
        case '/terapi':
          setPage(3);
          break;

        case '/priser-info':
          setPage(4);
          break;
        
        case '/kontakt':
          setPage(5);
          break;

        default: setPage(0);
      }
    }
    
    const handleOnClick = (burgerOpen, pageNumber) => {
      if (burgerOpen) setBurgerOpen(!burgerOpen);
      setPage(pageNumber);
    }

    const hideBurger = e => {
      const { id } = e.target;
      if (id === "burgerBackground" && burgerOpen) setBurgerOpen(!burgerOpen);
    }
    
    const renderNavbar = () => {
      return(
        <>
        <StyledBackground id="burgerBackground" onClick={hideBurger} open={burgerOpen}></StyledBackground>
        <StyledNavbarContainer>
        <Logo></Logo>

        <StyledLinkContainer open={burgerOpen} className={burgerOpen ? "animated fadeInRight" : ""}>
          <Div>
            <StyledLink 
            to={"/hjem"} 
            onClick={() => handleOnClick(burgerOpen, 0)}
            active={globalStatePage === 0}
            >
            Hjem
            </StyledLink>
            <StyledLine showLine={globalStatePage === 0} />
          </Div>
          
          <Div>
            <StyledLink 
            to={"/om-gestalt"} 
            onClick={() => handleOnClick(burgerOpen, 1)}
            active={globalStatePage === 1}
            >
              Om gestalt
            </StyledLink>
            <StyledLine showLine={globalStatePage === 1} />
          </Div>

          <Div>
            <StyledLink 
            to={"/om-line"} 
            onClick={() => handleOnClick(burgerOpen, 2)}
            active={globalStatePage === 2}
            >
              Om Line
            </StyledLink>
            <StyledLine showLine={globalStatePage === 2} />
          </Div>

          <Div>
            <StyledLink 
            to={"/terapi"} 
            onClick={() => handleOnClick(burgerOpen, 3)}
            active={globalStatePage === 3}
            >
              Terapi
            </StyledLink>
            <StyledLine showLine={globalStatePage === 3} />
          </Div>

          <Div>
            <StyledLink 
            to={"/priser-info"} 
            onClick={() => handleOnClick(burgerOpen, 4)}
            active={globalStatePage === 4}
            >
              Priser & info
            </StyledLink>
            <StyledLine showLine={globalStatePage === 4} />
          </Div>

          <Div>
            <StyledLink 
            to={"/kontakt"} 
            onClick={() => handleOnClick(burgerOpen, 5)}
            active={globalStatePage === 5}
            >
              Kontakt
            </StyledLink>
            <StyledLine showLine={globalStatePage === 5} />
          </Div>
        </StyledLinkContainer>

        <Burger open={burgerOpen} onClick={() => setBurgerOpen(!burgerOpen)}/>

      </StyledNavbarContainer>
      </>
      ); 
    }

    return renderNavbar();
}

export default Navbar;


const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: transparent;
  z-index: 1;
  display: ${({ open }) => open ? "" : "none"};
  &:focus{
    outline: none;
  }
`;

const StyledNavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: calc(var(--vh) * 10);
  max-height: calc(var(--vh) * 10);
  z-index: 1;
  width: 100%;
  position: fixed;
  background-color: rgba(20, 20, 20, 0.75);
  align-items: center;
`;

const StyledLinkContainer = styled.div`
  min-height: calc(var(--vh) * 10);
  width: 60%;
  display: flex;
  justify-content: space-around;
  background: transparent;
  align-items: center;

  @media screen and (max-width: 1024px){
    width: 80%;
  }
  
  @media screen and (max-width: 900px){
    width: 100%;
  }

  @media screen and (max-width: 768px){
    position: absolute;
    right: 0px;
    height: calc(var(--vh) * 90);
    width: 50%;
    top: calc(var(--vh) * 10);
    background-color: rgba(20, 20, 20, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transform: ${({open}) => open ? "translateX(0%)" : "translateX(100%)"};
  }
`;


const StyledLine = styled.div`
  background: linear-gradient(to right, #43c6ac, #f8ffae);
  height: 2px;
  width: 100%;
  border-radius: 100px;
  display: ${({ showLine }) => showLine ? "none" : "none"};

  @media screen and (max-width: 768px){
    display: none;
  }
`;


const Div = styled.div`
  height: 100%;
  @media screen and (max-width: 768px){
    width: 100%;
    height: calc(var(--vh) * 90 / 6);
  }
`;

export const StyledLink = styled(Link)`
  background: transparent;
  color: white;
  font-size: 1em;
  padding: 0.25rem 1rem;
  border: none;
  
  font-weight: bold;
  outline: 0;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media screen and (min-width: 769px){
    background: ${({active}) => active ? "-webkit-linear-gradient(#43c6ac, #f8ffae)" : "" };
    -webkit-background-clip: ${({active}) => active ? "text" : ""};
    -webkit-text-fill-color: ${({active}) => active ? "transparent" : ""};
  }
  

  &:hover, &:active {
    cursor: pointer;
    background: linear-gradient(to right, #43c6ac, #f8ffae);
    color: rgba(20, 20, 20, 0.8);
    
    -webkit-background-clip: rgba(20, 20, 20, 0.8);
    -webkit-text-fill-color: rgba(20, 20, 20, 0.8);

    border-radius: 4px;
    border: none;
  }

  @media screen and (max-width: 768px){
    width: 100%;
    height: 100%;
    background: ${({active}) => active ? "linear-gradient(to right, #43c6ac, #f8ffae)" : ""};
    border-radius: 4px;
    border: none;
  }
`; 