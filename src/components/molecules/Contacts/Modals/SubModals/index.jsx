import Modal from 'components/layouts/Modal';
import React from 'react';
import EditPersonalInfo from './EditPersonalInfo/EditPersonalInfo';

function EditPersonalInfoModal() {
  return (
    <Modal header="Edit Personal Info" isShown={true}>
      <EditPersonalInfo />
    </Modal>
  );
}

export default EditPersonalInfoModal;
