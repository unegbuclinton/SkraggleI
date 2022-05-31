import Modal from 'components/layouts/Modal';
import React from 'react';
import EditAssociationModalComponent from '../EditAssociationModalComponent';

function EditAssociationModal({ isShown, onClose }) {
  return (
    <Modal header="Edit Associations" isShown={isShown} hide={onClose}>
      <EditAssociationModalComponent onClose={onClose} />
    </Modal>
  );
}

export default EditAssociationModal;
