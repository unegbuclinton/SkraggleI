import Modal from 'components/layouts/Modal';
import React from 'react';
import PledgeInfoModalComponent from '../PledgeInfrormationModalComponent';

function PledgeInfoModal({ onClose, isShown, onClick }) {
  return (
    <Modal header="Pledge" isShown={isShown} hide={onClose}>
      <PledgeInfoModalComponent onClose={onClose} onClick={onClick} />
    </Modal>
  );
}

export default PledgeInfoModal;
