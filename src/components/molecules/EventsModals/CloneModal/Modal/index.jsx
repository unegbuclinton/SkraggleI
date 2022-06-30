import Modal from 'components/layouts/Modal';
import React from 'react';
import CloneEvent from '../CloneEvent';

function CloneEventModal({ isShown, onClose, onClick }) {
  return (
    <Modal header="Clone Event" isShown={isShown} hide={onClose}>
      <CloneEvent onClose={onClose} onClick={onClick} />
    </Modal>
  );
}

export default CloneEventModal;
