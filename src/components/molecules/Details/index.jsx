import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import React from "react";
import styled from "styled-components";
import PersonalDetailsCard from "./PersonalDetails/PersonalDetailsCard";

function ProfileLayOut({ children, heading }) {
  return (
    <ProfileContainer>
      <div>
        <h1 className="main-heading">Personal Details</h1>
        <CardWrapper>
          <div className="card">
            <PersonalDetailsCard />
          </div>
        </CardWrapper>
      </div>

      <ProfileContentWrapper>
        <h1 className="main-heading">{heading}</h1>
        <ProfileContent>{children}</ProfileContent>
      </ProfileContentWrapper>
    </ProfileContainer>
  );
}

export default ProfileLayOut;

const ProfileContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  gap: 1.572rem;
  display: flex;
  .main-heading {
    font-size: ${FONTSIZES.base};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS["gray-500"]};
    padding-bottom: 1.6rem;
    padding-top: 2.4rem;
    position: -webkit-sticky;
    position: sticky;
    top: 4.8rem;
    z-index: 1;
    background-color: ${COLORS["bg-light-blue"]};
  }
`;

const CardWrapper = styled.div`
  height: 100%;
  .card {
    position: -webkit-sticky;
    position: sticky;
    top: 10rem;
    margin-bottom: 2.68rem;
  }
`;

const ProfileContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ProfileContent = styled.div`
  flex: 1;
  /* background-color: red; */
  position: -webkit-sticky;
  position: sticky;
  top: 10rem;
  overflow: auto;
`;
