import Modal from 'components/layouts/Modal';
import React from 'react';
import CreateVolunteerModal from '../CreateVolunteer';

function VolunteerModal({ isShown, onClose }) {
  return (
    <Modal header="Create Volunteer" isShown={isShown} hide={onClose}>
      <CreateVolunteerModal onClose={onClose} />
    </Modal>
  );
}

export default VolunteerModal;
