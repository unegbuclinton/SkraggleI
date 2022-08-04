import Modal from 'components/layouts/Modal';
import React from 'react';
import P2PFundraiserLiveModalComponent from '../P2PFundraiserLiveModalComponent';

function P2PFundraiserLiveModal({ onClose, isShown }) {
  return (
    <Modal
      header="Your P2P fundraiser is live!"
      isShown={isShown}
      hide={onClose}
      showClose={onClose}>
      <P2PFundraiserLiveModalComponent />
    </Modal>
  );
}

export default P2PFundraiserLiveModal;
