import Modal from 'components/layouts/Modal';
import EditPackageModalComponent from 'components/molecules/EventsDetails/DropdownComponents/PackagesDropdown/EditPackageModalComponent';
import React from 'react';

function EditPackageModal({ isShown, onClose }) {
  return (
    <Modal header="Edit Packages" isShown={isShown} hide={onClose}>
      <EditPackageModalComponent onClose={onClose} />
    </Modal>
  );
}

export default EditPackageModal;
