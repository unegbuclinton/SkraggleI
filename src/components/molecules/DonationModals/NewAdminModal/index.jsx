import Modal from 'components/layouts/Modal';
import React from 'react';
import AdminModalComponent from '../AdminModalComponent';

function NewAdminModal({ onClose, isShown}) {
  return (
    <Modal header="New Admin" isShown={isShown} hide={onClose} showClose={onClose}>
        <AdminModalComponent onClose={onClose} />
    </Modal>
  );
}

export default NewAdminModal;
