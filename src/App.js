import React from 'react';
import { createGlobalStyle } from "styled-components";
import Router from './Router/Router';
import "animate.css";
import Modal from './components/Modal/Modal';

const App = () => {
  return (
    <>
      <Router />
      <GlobalStyle />
      <Modal />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    * {
      margin: 0;
      padding: 0;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }
    p {
        line-height: 1.8;
    }
    body {
        font-family: 'Poppins', sans-serif;


        overflow: hidden;
        margin: 0;
    } 
    input::-webkit-inner-spin-button, 
    input::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-scrollbar {
        width: 0;
    }
    
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
        background-color: #212121;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #ffc15e;
        outline: 1px solid rgba(20, 20, 20, 0.5);
    }
    /* class for text not to be selected or focused */
    .no-select {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                        supported by Chrome and Opera */
    }
    ul li {
        list-style: none;
    }
`;
