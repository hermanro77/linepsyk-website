import styled from 'styled-components';

export const StyledOuter = styled.main`
  height: calc(var(--vh) * 100);
  height: 100%;
  display: flex;
  background-image: url("/images/river.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-block-size: -webkit-fill-available;
  overflow: hidden;
  position: absolute;
  width: 100%;
`;


//display: flex;
//flex-direction: row;
//position: relative;

export const StyledContainer = styled.div`
  padding: 2rem;
  min-height: calc(var(--vh) * 95 - 4rem);
  max-height: calc(var(--vh) * 95 - 4rem);
  min-width: 95vw;
  max-width: 95vw;
  text-align: center;
  background-color: rgba(20, 20, 20, 0.75);
  border-radius: 6px;
  box-shadow: 0px 15px 30px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  margin: auto;
  top: calc(var(--vh) * 5);
  overflow: auto;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
    overflow: auto;
  }
  @media screen and (max-width: 450px) {
    padding: 1rem;
    overflow: auto;
  }
`;

export const StyledAlert = styled.div`
  background: linear-gradient(to top, #43c6ac, #f8ffae);
  color: white;
  font-size: 20px;
  border-radius: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  min-width: 300px;
  justify-content: center;

  @media screen and (max-width: 768px){
    min-height: 200px;
    min-width: 200px;
    max-height: 200px;
    max-width: 200px;
    margin-top: 5rem;
    text-align: center;
  }
`;

export const ContactTransition = styled.div`
  content: "";
  left: 0;
  height: 150px;
  background: #96e9b0;
  opacity: 1;
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
  margin: -2rem;
  transform: translateY(-1.99rem);
  margin-top: 0;

  @media screen and (max-width: 768px){
    margin: -1.5rem;
    transform: translateY(-1.49rem);
    clip-path: polygon(100% 80%, 0 100%, 100% 100%);
  }

  @media screen and (max-width: 450px){
    margin: -1rem;
    transform: translateY(-0.99rem);
    clip-path: polygon(100% 70%, 0 100%, 100% 100%);
  }
`;

