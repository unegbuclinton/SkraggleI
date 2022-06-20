import Button from 'components/atoms/Button/Button';
import EditPersonalInfoModal from 'components/molecules/Contacts/Modals/SubModals';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { formatDate } from 'utilities/helpers';
import { PersonalInfoContainer, PersonalInfoHeading, PersonalInfoWrapper } from './styles';

function PersonalInfo() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(true);
  };
  const { eachContact } = useSelector((state) => state.contact);
  const { first_name, last_name, primary_email, address, primary_phone, birth_date } = eachContact;
  return (
    <PersonalInfoWrapper>
      <PersonalInfoHeading>
        <h1 className="heading">Personal Information</h1>
        <Button className="info-btn" onClick={toggleModal}>
          Edit
        </Button>
      </PersonalInfoHeading>
      <PersonalInfoContainer>
        <h2 className="info">TITLE</h2>
        <h2 className="title mr">Mr.</h2>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">FIRST NAME </h2>
        <h2 className="title first-name">{first_name}</h2>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">MIDDLE NAME</h2>
        <p className="title middle-name">-</p>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">LAST NAME</h2>
        <p className="title last-name">{last_name}</p>
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
        <p className="title date">{birth_date}</p>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">PRIMARY EMAIL</h2>
        <p className="title email"> {primary_email}</p>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">PRIMARY PHONE</h2>
        <p className="title phone"> {primary_phone}</p>
      </PersonalInfoContainer>
      <PersonalInfoContainer>
        <h2 className="info">ADDRESS</h2>
        <div className="title address-container">{address}</div>
      </PersonalInfoContainer>
      {showModal && (
        <EditPersonalInfoModal
          isShown={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </PersonalInfoWrapper>
  );
}

export default PersonalInfo;
