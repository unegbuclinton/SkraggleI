import Modal from 'components/layouts/Modal';
import React from 'react';
import EditWebsiteModalComponent from '../EditWebsiteModalComponent';

function EditWebsiteModal({ isShown, onClose }) {
  return (
    <Modal header="Edit Website" isShown={isShown} hide={onClose}>
      <EditWebsiteModalComponent onClose={onClose} />
    </Modal>
  );
}

export default EditWebsiteModal;
