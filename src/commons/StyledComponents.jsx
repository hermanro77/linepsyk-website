import styled from 'styled-components';

export const StyledOuter = styled.main`
  height: calc(var(--vh) * 100);
  
  display: flex;
  background-image: url("/images/river.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-block-size: -webkit-fill-available;
  overflow: hidden;
`;


//display: flex;
//flex-direction: row;
//position: relative;

export const StyledContainer = styled.div`
  padding: 2rem;
  min-height: calc(var(--vh) * 90 - 6rem);
  max-height: calc(var(--vh) * 90 - 6rem);
  
  width: 100vh;
  min-width: calc(95% - 12rem);
  max-width: calc(95% - 12rem);
  background-color: rgba(20, 20, 20, 0.75);
  border-radius: 6px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-left: 5rem;
  margin-right: auto;
  overflow: auto;
  

  @media screen and (max-width: 1400px) {
    min-height: calc(var(--vh) * 94 - 4rem);
    
    min-width: calc(95%);
    margin: auto;
    margin-top: 5rem;
    overflow: auto;
  }

  @media screen and (max-width: 600px) {
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
