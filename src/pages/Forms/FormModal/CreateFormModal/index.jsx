import Modal from 'components/layouts/Modal';
import CreateFormComponent from 'components/molecules/FormModalComponent/createFormComponent';
import React from 'react';

function CreateFormModal({ isShown, onClose }) {
  return (
    <Modal header="Create a Form" isShown={isShown} hide={onClose}>
      <CreateFormComponent onClose={onClose} />
    </Modal>
  );
}

export default CreateFormModal;
