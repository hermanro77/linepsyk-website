import React from "react";
import styled from "styled-components";
import { StyledVerticalContainer } from "../Footer/Info";
import ProfileText from "./ProfileText";

const Profile = () => {
  return(
    <StyledVContainer>
      <StyledImg src="images/line.jpg"></StyledImg>
      <ProfileText />
    </StyledVContainer>
  );

}

export default Profile;

const StyledImg = styled.img`
  border-radius: 50%;
  height: 250px;
  width: 250px;
`;

const StyledVContainer = styled(StyledVerticalContainer)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;