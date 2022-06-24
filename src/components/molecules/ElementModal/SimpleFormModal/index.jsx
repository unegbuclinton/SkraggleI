import Modal from 'components/layouts/Modal';
import SimpleFormModalComponent from 'components/molecules/ElementsModalsComponents/SimpleFormModalComponent';
import React from 'react';

function SimpleFormModal({ isShown, onClose }) {
  return (
    <Modal header="Top Fundraiser" isShown={isShown} hide={onClose}>
      <SimpleFormModalComponent />
    </Modal>
  );
}

export default SimpleFormModal;
