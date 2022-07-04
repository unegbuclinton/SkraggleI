import Modal from 'components/layouts/Modal';
import React from 'react';
import DeletePackage from '../DeletePackages';

function DeletePackageModal({ isShown, onClose, onClick }) {
  return (
    <Modal header="Delete Package" isShown={isShown} hide={onClose}>
      <DeletePackage onClose={onClose} onClick={onClick} />
    </Modal>
  );
}

export default DeletePackageModal;
