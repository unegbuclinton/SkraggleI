import Modal from 'components/layouts/Modal';
import PackageDropdown from 'components/molecules/EventsDetails/DropdownComponents/PackagesDropdown';
import React from 'react';

function EventPackageModal({ isShown, onClose }) {
  return (
    <Modal header="Packages" isShown={isShown} hide={onClose}>
      <PackageDropdown onClose={onClose} />
    </Modal>
  );
}

export default EventPackageModal;
