import Modal from 'components/layouts/Modal';
import React from 'react';
import Delete from '../Delete';

function DeleteModal({ isShown, onClose, handleDelete, warning }) {
  return (
    <Modal isShown={isShown} hide={onClose}>
      <Delete onClose={onClose} handleDelete={handleDelete} warning={warning} />
    </Modal>
  );
}

export default DeleteModal;
