import Modal from 'components/layouts/Modal';
import React from 'react';
import P2PFundraiserModalComponent from '../P2PFundraiserModalComponent/P2PModalComponent';

function P2PFundraiserModal({ onClose, isShown }) {
  return (
    <Modal
      header="Create P2P Fundraiser"
      //   onClose={() => setShowFirstModal(false)}
      isShown={isShown}
      hide={onClose}>
      <P2PFundraiserModalComponent />
    </Modal>
  );
}

export default P2PFundraiserModal;
