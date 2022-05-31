import Modal from 'components/layouts/Modal';
import React from 'react';
import InteractionComponent from './Interaction';

function InteractionModal({ isShown, onClose }) {
  return (
    <Modal header="Add Interaction" isShown={isShown} hide={onClose}>
      <InteractionComponent onClose={onClose} />
    </Modal>
  );
}

export default InteractionModal;
