import React from 'react';
import Modal from 'components/layouts/Modal';
import CloneEvent from '../CloneEvent';

function CloneEventModal({ isShown, onClose }) {
  return (
    <Modal header="Clone Event" isShown={isShown} hide={onClose}>
      <CloneEvent onClose={onClose} />
    </Modal>
  );
}

export default CloneEventModal;
