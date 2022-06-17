import Modal from 'components/layouts/Modal';
import React from 'react';
import DonateButton from '../DonateButtonModal';

function DonateModal({ onClose, isShown }) {
  return (
    <Modal header="Donate Button" isShown={isShown} hide={onClose}>
      <DonateButton onclose={onClose} />
    </Modal>
  );
}

export default DonateModal;
