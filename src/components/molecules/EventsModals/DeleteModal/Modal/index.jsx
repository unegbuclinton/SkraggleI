import Modal from 'components/layouts/Modal';
import React from 'react';
import DeleteEvent from '../DeleteEvent';

function DeleteEventModal({ isShown, onClose, onClick }) {
  return (
    <Modal header="Delete Event" isShown={isShown} hide={onClose}>
      <DeleteEvent onClose={onClose} onClick={onClick} />
    </Modal>
  );
}

export default DeleteEventModal;
