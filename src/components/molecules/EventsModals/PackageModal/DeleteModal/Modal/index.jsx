import React from 'react';
import Modal from 'components/layouts/Modal';
import DeletePackage from '../DeletePackages';

function DeletePackageModal({ isShown, onClose }) {
  return (
    <Modal header="Delete Package" isShown={isShown} hide={onClose}>
      <DeletePackage onClose={onClose} />
    </Modal>
  );
}

export default DeletePackageModal;
