import Modal from 'components/layouts/Modal';
import React from 'react';
import DeleteField from '../DeleteField';

function DeleteFieldModal({ isShown, onCloseModal }) {
  return (
    <Modal header="Delete Field" isShown={isShown} hide={onCloseModal}>
      <DeleteField onCloseModal={onCloseModal} />
    </Modal>
  );
}

export default DeleteFieldModal;
