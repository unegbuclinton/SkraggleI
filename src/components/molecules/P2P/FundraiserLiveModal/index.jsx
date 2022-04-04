import Modal from 'components/layouts/Modal';
import React from 'react';
import FundraiserLiveComponent from '../FundraiserLiveModalComponent';

function FundraiserLive({ onClose, isShown }) {
  return (
    <Modal header="Your P2P fundraiser is live!" isShown={isShown} hide={onClose}>
        <FundraiserLiveComponent onClose={onClose} />
    </Modal>
  );
}

export default FundraiserLive;
