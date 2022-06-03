import Button from 'components/atoms/Button/Button';
import EditContactInfoModal from 'components/molecules/Contacts/SubModals/EditContactInfo';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ContactContainer, ContactHeading, ContactWrapper } from './styles';

function ContactInfo() {
  const { eachContact } = useSelector((state) => state.contact);
  const {
    primary_email,
    home_email,
    work_email,
    other_emails,
    primary_phone,
    home_phone,
    work_phone,
    other_phones,
    address,
    home_address,
    work_address,
    other_addresses
  } = eachContact;
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(true);
  };
  return (
    <ContactWrapper>
      <ContactHeading>
        <h1 className="heading">Contact Info</h1>
        <Button className="heading-btn" onClick={toggleModal}>
          Edit
        </Button>
      </ContactHeading>
      <ContactContainer>
        <h2 className="title">PRIMARY EMAIL</h2>
        <p className="info email">{primary_email}</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">HOME EMAIL</h2>
        <p className="info home-email">{home_email}</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">WORK EMAIL</h2>
        <p className="info work-email">{work_email}</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">OTHER EMAILS</h2>
        <p className="info other-email">{other_emails}</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">PRIMARY PHONE</h2>
        <p className="info primary-phone">{primary_phone}</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">HOME PHONE</h2>
        <p className="info phone">{home_phone}</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">WORK PHONE</h2>
        <p className="info phone">{work_phone}</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">OTHER PHONES</h2>
        <p className="info other-phone">{other_phones}</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">ADDRESS</h2>
        <div className="info address-container">{address}</div>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">Home Address</h2>
        <p className="info home-address">{home_address}</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title"> Work Address</h2>
        <p className="info work-address">{work_address}</p>
      </ContactContainer>
      <ContactContainer>
        <h2 className="title">Others Address</h2>
        <p className="info other-address">{other_addresses}</p>
      </ContactContainer>
      {openModal && (
        <EditContactInfoModal
          isShown={openModal}
          onCloseModal={() => {
            setOpenModal(false);
          }}
        />
      )}
    </ContactWrapper>
  );
}

export default ContactInfo;
