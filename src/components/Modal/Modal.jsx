import React from "react";
import styled from "styled-components";
import { useGlobalState, dispatch } from "../../Store/State";

const closeModalAction = () => dispatch({
  type: "closeModalAction"
});

const Modal = () => {
  
  const [showModal] = useGlobalState("showModal");
  
  console.log("show: " + showModal);


  const ESCAPE_KEY = 27;
  const hideOnESC = e => {
    if (e.keyCode === ESCAPE_KEY) {
      closeModalAction();
    }
  };
  
  const hideOnClick = e => {
    const { id } = e.target;
    if (id === "modal") {
      closeModalAction();
    }
  };

  const renderModal = () => {
    if (!showModal) return null;

    return (
      <StyledModal
        id="modal"
        onClick={hideOnClick}
        onKeyDown={hideOnESC}
        tabIndex="0"
      >
        
      </StyledModal>
    );
  };

  return renderModal();
};


export default Modal;

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: rgba(20, 20, 20, 0.9);
  z-index: 1000;

  &:focus{
    outline: none;
  }
`;