import Modal from 'components/layouts/Modal';
import DonationLevels from 'components/molecules/ElementsModalsComponents/DonationLevels';
import React from 'react';

function DonationLevelModal({ isShown, onClose }) {
  return (
    <Modal header="Donation Lavels" isShown={isShown} hide={onClose}>
      <DonationLevels />
    </Modal>
  );
}

export default DonationLevelModal;
