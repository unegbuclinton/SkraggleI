import Button from 'components/atoms/Button/Button';
import React from 'react';
import { ContactContainer, ContactHeading, ContactWrapper } from './styles';

function PublicInfo() {
  return (
    <ContactWrapper>
      <ContactHeading>
        <h1 className="heading">Public Information</h1>
        <Button className="heading-btn">Edit</Button>
      </ContactHeading>
      <ContactContainer>
        <h2 className="title">ORGANIZATION NAME</h2>
        <p className="info">Org BuYjbS</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">ORGANIZATION TAGLINE</h2>
        <p className="info "></p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">ADDRESS</h2>
        <div className="info address-container">
          789 West Pender Street, #500 Vancouver, British Columbia, V6C 2X1 Canada
        </div>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">PHONE</h2>
        <p className="info phone"> 1 888 585 8315</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">EMAIL</h2>
        <p className="info email">loreum@example.com</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">TIMEZONE</h2>
        <p className="info ">Canada/Pacific</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">FISCAL YEAR END </h2>
        <p className="info ">Dec 31</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">CURRENCY</h2>
        <p className="info home-address">CAD</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">WEBSITE</h2>
        <p className="info work-address">http://skraggle.co</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">ADDITIONAL LINK</h2>
        <p className="info other-address">-</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">TERMS AND CONDITIONS</h2>
        <p className="info other-address">-</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">PRIVACY POLICY</h2>
        <p className="info other-address">-</p>
      </ContactContainer>
    </ContactWrapper>
  );
}

export default PublicInfo;
