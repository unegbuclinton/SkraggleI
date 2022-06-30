import Modal from 'components/layouts/Modal';
import React from 'react';
import DeleteField from '../DeleteField';

function DeleteFieldModal({ isShown, onCloseModal, onClick }) {
  return (
    <Modal header="Delete Field" isShown={isShown} hide={onCloseModal}>
      <DeleteField onCloseModal={onCloseModal} onClick={onClick} />
    </Modal>
  );
}

export default DeleteFieldModal;
