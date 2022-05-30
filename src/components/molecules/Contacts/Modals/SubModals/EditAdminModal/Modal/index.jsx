import Modal from 'components/layouts/Modal';
import React from 'react';
import EditAmin from '../EditAdmin';

function AdminModal({ onClose, isShown }) {
  return (
    <Modal header="Edit Admin" isShown={isShown} hide={onClose}>
      <EditAmin onClose={onClose} />
    </Modal>
  );
}

export default AdminModal;
