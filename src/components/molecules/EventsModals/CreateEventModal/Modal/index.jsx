import Modal from 'components/layouts/Modal';
import React from 'react';
import CreateEvent from '../CreateEvent';

function CreateEventModal({ isShown, onClose }) {
  return (
    <Modal header="Create New Event" isShown={isShown} hide={onClose}>
      <CreateEvent onClose={onClose} />
    </Modal>
  );
}

export default CreateEventModal;
