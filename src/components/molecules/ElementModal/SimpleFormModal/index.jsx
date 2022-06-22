import Modal from 'components/layouts/Modal';
import SimpleFormModalComponent from 'components/molecules/ElementsModalsComponents/SimpleFormModalComponent';
import React from 'react';

function SimpleFormModal() {
  return (
    <Modal header="Top Fundraiser" isShown>
      <SimpleFormModalComponent />
    </Modal>
  );
}

export default SimpleFormModal;
