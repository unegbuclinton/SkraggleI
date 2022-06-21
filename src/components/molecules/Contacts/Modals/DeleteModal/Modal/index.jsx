import Modal from 'components/layouts/Modal';
import React from 'react';
import Delete from '../Delete';

function DeleteModal({ isShown, onClose, handleDelete, warning, isLoading }) {
  return (
    <Modal isShown={isShown} hide={onClose}>
      <Delete
        onClose={onClose}
        isLoading={isLoading}
        handleDelete={handleDelete}
        warning={warning}
      />
    </Modal>
  );
}

export default DeleteModal;
