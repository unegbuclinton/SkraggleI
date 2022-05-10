import React from 'react';
import Button from 'components/atoms/Button/Button';
import { ContactContainer, ContactHeading, ContactWrapper } from './styles';

function ContactInfo() {
  return (
    <ContactWrapper>
      <ContactHeading>
        <h1 className="heading">Contact Info</h1>
        <Button className="heading-btn">Edit</Button>
      </ContactHeading>
      <ContactContainer>
        <h2 className="title">PRIMARY EMAIL</h2>
        <p className="info email">troybarnesthrowsfootballs@gmail.com</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">HOME EMAIL</h2>
        <p className="info home-email">homefootballs@gmail.com</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">WORK EMAIL</h2>
        <p className="info work-email">-</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">OTHER EMAILS</h2>
        <p className="info other-email">-</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">PRIMARY PHONE</h2>
        <p className="info primary-phone">(704) 808-1298</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">HOME PHONE</h2>
        <p className="info phone">-</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">WORK PHONE</h2>
        <p className="info phone">-</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">OTHER PHONES</h2>
        <p className="info other-phone">-</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">ADDRESS</h2>
        <div className="info address-container">
          6545 France Avenue South Edina, Minnesota, 55435 United States
        </div>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">HOME ADDRESS</h2>
        <p className="info home-address">-</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">WORK ADDRESS</h2>
        <p className="info work-address">-</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">OTHER ADDRESSES</h2>
        <p className="info other-address">-</p>
      </ContactContainer>
    </ContactWrapper>
  );
}

export default ContactInfo;
