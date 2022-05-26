import Modal from 'components/layouts/Modal';
import React from 'react';
import EditContactInfo from './EditContactInfo';

function EditContactInfoModal() {
  return (
    <Modal isShown>
      <EditContactInfo />
    </Modal>
  );
}

export default EditContactInfoModal;
