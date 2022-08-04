import Modal from 'components/layouts/Modal';
import { useState } from 'react';
import P2PFundraiserLiveModalComponent from '../P2PFundraiserLiveModalComponent';
import P2PFundraiserModalComponent from './P2PModalComponent';

function P2PModalComponent({ onClose, isShown }) {
  const [showFirstModal, setShowFirstModal] = useState(true);

  return showFirstModal ? (
    <Modal
      header="Create P2P Fundraiser"
      onClose={() => setShowFirstModal(false)}
      isShown={isShown}
      hide={onClose}>
      <P2PFundraiserModalComponent />
    </Modal>
  ) : (
    <Modal
      header="Your P2P fundraiser is live!"
      isShown={isShown}
      hide={onClose}
      showClose={onClose}
      // onClose={setShowFirstModal(true)}
    >
      <P2PFundraiserLiveModalComponent />
    </Modal>
  );
}

export default P2PModalComponent;
