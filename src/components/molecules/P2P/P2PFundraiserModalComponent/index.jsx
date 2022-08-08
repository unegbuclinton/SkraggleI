import Modal from 'components/layouts/Modal';
import { useState } from 'react';
import P2PFundraiserLiveModalComponent from '../P2PFundraiserLiveModalComponent';
import P2PFundraiserModalComponent from './P2PModalComponent';

function P2PModalComponent({ onClose, isShown }) {
  const [showFirstModal, setShowFirstModal] = useState(true);
  const [showLiveModal, setShowLiveModal] = useState(false);

  console.log({ showFirstModal, showLiveModal });
  return (
    <>
      {showFirstModal && (
        <Modal header="Create P2P Fundraiser" isShown={isShown} hide={onClose}>
          <P2PFundraiserModalComponent
            // onClose={onClose}
            showLive={() => {
              setShowFirstModal(false);
              setShowLiveModal(true);
            }}
          />
        </Modal>
      )}

      {showLiveModal && (
        <Modal
          header="Your P2P fundraiser is live!"
          isShown={isShown}
          hide={() => setShowLiveModal(false)}
          showClose={() => setShowLiveModal(false)}>
          <P2PFundraiserLiveModalComponent />
        </Modal>
      )}
    </>
  );
}

export default P2PModalComponent;

// showFirstModal ? (
//   <Modal
//     header="Create P2P Fundraiser"
//     onClose={() => setShowFirstModal(false)}
//     isShown={isShown}
//     hide={onClose}>
//     <P2PFundraiserModalComponent />
//   </Modal>
// ) : (
//   <Modal
//     header="Your P2P fundraiser is live!"
//     isShown={isShown}
//     hide={onClose}
//     showClose={onClose}>
//     <P2PFundraiserLiveModalComponent />
//   </Modal>
// );
