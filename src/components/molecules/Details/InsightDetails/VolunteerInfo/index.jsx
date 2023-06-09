import Button from 'components/atoms/Button/Button';
import EditVolunteerInfoModal from 'components/molecules/Contacts/Modals/SubModals/EditVolunteerInfo/Modal';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { VolunteerContainer, VolunteerHeading, VolunteerWrapper } from './styles';

function VolunteerInfo() {
  const [open, setOpen] = useState(false);
  const { eachContact } = useSelector((state) => state.contact);
  return (
    <>
      <EditVolunteerInfoModal
        isShown={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      <VolunteerWrapper>
        <VolunteerHeading>
          <h1 className="heading">Volunteer Information</h1>
          <Button className="heading-btn" onClick={() => setOpen(true)}>
            Edit
          </Button>
        </VolunteerHeading>
        <VolunteerContainer>
          <h2 className="title">T-SHIRT SIZE</h2>
          <p className="info size">{eachContact.t_shirt_size}</p>
        </VolunteerContainer>
      </VolunteerWrapper>
    </>
  );
}

export default VolunteerInfo;
