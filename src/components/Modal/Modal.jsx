import React from "react";
import styled from "styled-components";
import { useGlobalState, dispatch } from "../../Store/State";
import ModalContent from "./ModalContent";

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
        className="animated fadeIn"
        onClick={hideOnClick}
        onKeyDown={hideOnESC}
        tabIndex="0"
      >
        <ModalContent closeModalAction={closeModalAction}></ModalContent>
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
  background-color: rgba(240, 240, 240, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus{
    outline: none;
  }
`;