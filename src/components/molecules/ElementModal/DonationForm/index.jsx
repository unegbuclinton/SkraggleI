import Modal from 'components/layouts/Modal';
import DonateFormModalComponent from 'components/molecules/ElementsModalsComponents/DonateFormModalComponent';
import React from 'react';

function DonationFormModal({ isShown, onClose }) {
  return (
    <Modal header="Donate Form" isShown={isShown} hide={onClose}>
      <DonateFormModalComponent />
    </Modal>
  );
}

export default DonationFormModal;
