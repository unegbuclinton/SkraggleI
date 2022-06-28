import Modal from 'components/layouts/Modal';
import TopFundraiserModalComponent from 'components/molecules/ElementsModalsComponents/TopFundraiserModalComponent';
import React from 'react';

function TopFundraiserModal({ isShown, onClose }) {
  return (
    <Modal header="Top Fundraiser" isShown={isShown} hide={onClose}>
      <TopFundraiserModalComponent />
    </Modal>
  );
}

export default TopFundraiserModal;
