import Modal from 'components/layouts/Modal';
import React from 'react';
import LinkModal from '../LinkModal';

function DonateLinkModal({ onClose, isShown }) {
  return (
    <Modal header="Donate Link" isShown={isShown} hide={onClose}>
      <LinkModal onClose={onClose} />
    </Modal>
  );
}

export default DonateLinkModal;
