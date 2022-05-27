import Modal from 'components/layouts/Modal';
import React from 'react';
import EditContactInfo from './EditContactInfo';

function EditContactInfoModal({ onCloseModal, isShown }) {
  return (
    <Modal header="Edit Contact Info" isShown={isShown} hide={onCloseModal}>
      <EditContactInfo onCloseModal={onCloseModal} />
    </Modal>
  );
}

export default EditContactInfoModal;
