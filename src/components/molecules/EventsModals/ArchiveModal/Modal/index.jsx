import Modal from 'components/layouts/Modal';
import React from 'react';
import ArchiveEvent from '../Archive';

function ArchiveModal({ isShown, onClose }) {
  return (
    <Modal header="Archive Event" isShown={isShown} hide={onClose}>
      <ArchiveEvent onClose={onClose} />
    </Modal>
  );
}

export default ArchiveModal;
