import styled from 'styled-components';

export const StyledOuter = styled.main`
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #34314f;
  position: relative;
  background-image: url("/images/river.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-block-size: -webkit-fill-available;
`;

export const StyledContainer = styled.div`
  padding: 2rem;
  background-color: #21C58B;
  min-height: calc(90vh - 6rem);
  max-height: calc(90vh - 6rem);
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
    min-height: calc(94vh - 4rem);
    min-width: calc(95%);
    max-width: calc(95%);
    margin: auto;
    margin-top: 5rem;
    overflow: auto;
  }

  @media screen and (max-width: 600px) {
    padding: 1.5rem;
    overflow: auto;
  }
`;
