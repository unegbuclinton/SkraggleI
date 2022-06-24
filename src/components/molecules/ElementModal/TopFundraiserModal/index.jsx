import Modal from 'components/layouts/Modal';
import TopFundraiserModalComponent from 'components/molecules/ElementsModalsComponents/TopFundraiserModalComponent';
import React from 'react';

function TopFundraiserModal() {
  return (
    <Modal header="Top Fundraiser" isShown>
      <TopFundraiserModalComponent />
    </Modal>
  );
}

export default TopFundraiserModal;
