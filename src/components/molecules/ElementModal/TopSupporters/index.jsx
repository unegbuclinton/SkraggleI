import Modal from 'components/layouts/Modal';
import TopSupportersModalComponent from 'components/molecules/ElementsModalsComponents/TopSupportersModalComponent';
import React from 'react';

function TopSupportersModal() {
  return (
    <Modal header="Top Supporters" isShown>
      <TopSupportersModalComponent />
    </Modal>
  );
}

export default TopSupportersModal;
