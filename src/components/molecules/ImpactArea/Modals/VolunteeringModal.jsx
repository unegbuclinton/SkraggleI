import Modal from 'components/layouts/Modal';
import React from 'react';
import VolunteeringModalComponent from '../ModalComponents/VolunteeringModalComponent';

function VolunteeringModal({ isShown, onClose }) {
  return (
    <Modal header="Add Volunteering Activity" isShown={isShown} hide={onClose}>
      <VolunteeringModalComponent />
    </Modal>
  );
}

export default VolunteeringModal;
