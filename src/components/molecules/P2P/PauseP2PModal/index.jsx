import Modal from 'components/layouts/Modal';
import React from 'react';
import PauseP2PModalComponent from '../PauseP2PModalComponent';

function PauseP2PModal({ onClose, isShown }) {
  return (
    <Modal header="Pause P2P Fundraiser" isShown={isShown} hide={onClose}>
      <PauseP2PModalComponent onClose={onClose} />
    </Modal>
  );
}

export default PauseP2PModal;
