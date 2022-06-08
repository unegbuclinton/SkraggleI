import Modal from 'components/layouts/Modal';
import React from 'react';
import FieldModalComponent from '../Fields/FieldModalComponent';

function CreateNewFieldModals({ isShown, onClose }) {
  return (
    <Modal header="Create new Fields" isShown={isShown} hide={onClose}>
      <FieldModalComponent onClose={onClose} />
    </Modal>
  );
}

export default CreateNewFieldModals;
