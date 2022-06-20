import Modal from 'components/layouts/Modal';
import DonateFormModalComponent from 'components/molecules/ElementsModalsComponents/DonateFormModalComponent';
import React from 'react';

function DonationFormModal() {
  return (
    <Modal header="Donate Form" isShown>
      <DonateFormModalComponent />
    </Modal>
  );
}

export default DonationFormModal;
