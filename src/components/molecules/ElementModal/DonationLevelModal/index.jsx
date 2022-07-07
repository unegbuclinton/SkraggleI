import Modal from 'components/layouts/Modal';
import DonationLevels from 'components/molecules/ElementsModalsComponents/DonationLevels';
import DonationLevelIframe from 'components/molecules/iFrameComp/DonationLevel';
import React from 'react';

function DonationLevelModal({ isShown, onClose }) {
  return (
    <Modal
      header="Donation Levels"
      isShown={isShown}
      hide={onClose}
      sideModal
      iframeChildren={<DonationLevelIframe />}>
      <DonationLevels />
    </Modal>
  );
}

export default DonationLevelModal;
