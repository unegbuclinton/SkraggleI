import Modal from 'components/layouts/Modal';
import React from 'react';

function DonateLinkModal({ onClose, isShown }) {
  return (
    <Modal header="Donate Link" isShown={isShown} hide={onClose}>
      <h1>DonateLinkModal</h1>
    </Modal>
  );
}

export default DonateLinkModal;
