import Modal from 'components/layouts/Modal';
import React from 'react';
import NewElement from '../NewElement';

function NewElementModal({ onClose, isShown }) {
  return (
    <Modal header="New Elements" isShown={isShown} hide={onClose}>
      <NewElement onclose={onClose} />
    </Modal>
  );
}

export default NewElementModal;
