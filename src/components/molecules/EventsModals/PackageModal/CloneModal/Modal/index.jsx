import Modal from 'components/layouts/Modal';
import React from 'react';

import ClonePackage from '../ClonePackage';

function ClonePackageModal({ isShown, onClose, onClick }) {
  return (
    <Modal header="Clone Event" isShown={isShown} hide={onClose}>
      <ClonePackage onClose={onClose} onClick={onClick} />
    </Modal>
  );
}

export default ClonePackageModal;
