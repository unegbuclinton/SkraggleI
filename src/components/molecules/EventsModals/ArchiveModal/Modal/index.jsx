import Modal from 'components/layouts/Modal';
import React from 'react';
import ArchiveEvent from '../Archive';

function ArchiveModal({ isShown, onClose, onClick }) {
  return (
    <Modal header="Archive Event" isShown={isShown} hide={onClose}>
      <ArchiveEvent onClose={onClose} onClick={onClick} />
    </Modal>
  );
}

export default ArchiveModal;
