import Modal from 'components/layouts/Modal';
import React from 'react';
import EditPersonalInfo from './EditPersonalInfo/EditPersonalInfo';

function EditPersonalInfoModal({ isShown, onClose }) {
  return (
    <Modal header="Edit Personal Info" isShown={isShown} hide={onClose}>
      <EditPersonalInfo onClose={onClose} />
    </Modal>
  );
}

export default EditPersonalInfoModal;
