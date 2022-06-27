import Modal from 'components/layouts/Modal';
import TopSupportersModalComponent from 'components/molecules/ElementsModalsComponents/TopSupportersModalComponent';
import React from 'react';

function TopSupportersModal({ isShown, onClose }) {
  return (
    <Modal header="Top Supporters" isShown={isShown} hide={onClose}>
      <TopSupportersModalComponent />
    </Modal>
  );
}

export default TopSupportersModal;
