import React from 'react';
import Button from 'components/atoms/Button/Button';
import { PersonalInfoContainer, PersonalInfoHeading, PersonalInfoWrapper } from './styles';

function PersonalInfo() {
  return (
    <PersonalInfoWrapper>
      <PersonalInfoHeading>
        <h1 className="heading">Persona Information</h1>
        <Button className="info-btn">Edit</Button>
      </PersonalInfoHeading>
      <PersonalInfoContainer>
        <h2 className="info">TITLE</h2>
        <h2 className="title mr">Mr.</h2>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">FIRST NAME </h2>
        <h2 className="title first-name">Troy</h2>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">MIDDLE NAME</h2>
        <p className="title middle-name">-</p>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">LAST NAME</h2>
        <p className="title last-name">Barnes</p>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">SUFFIX</h2>
        <p className="title suffix">Sr.</p>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">PREFERRED NAME</h2>
        <p className="title name">-</p>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">GENDER</h2>
        <p className="title gender">Male</p>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">BIRTH DATE</h2>
        <p className="title date">Dec 4, 1989</p>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">PRIMARY EMAIL</h2>
        <p className="title email"> troybarnesthrowsfootballs@gmail.com</p>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">PRIMARY PHONE</h2>
        <p className="title phone"> (704) 808-1298</p>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">ADDRESS</h2>
        <div className="title address-container">
          6545 France Avenue South Edina, Minnesota, 55435 United States
        </div>
      </PersonalInfoContainer>
    </PersonalInfoWrapper>
  );
}

export default PersonalInfo;
