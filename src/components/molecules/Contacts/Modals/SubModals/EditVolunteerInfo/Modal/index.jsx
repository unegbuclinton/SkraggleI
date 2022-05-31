import Modal from 'components/layouts/Modal';
import React from 'react';
import VolunteerEdit from '../EditVolunteer';

function EditVolunteerInfoModal({ isShown, onClose }) {
  return (
    <Modal header="Edit Volunteer Information" isShown={isShown} hide={onClose}>
      <VolunteerEdit onClose={onClose} />
    </Modal>
  );
}

export default EditVolunteerInfoModal;
