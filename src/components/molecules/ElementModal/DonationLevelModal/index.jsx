import Modal from 'components/layouts/Modal';
import DonationLevels from 'components/molecules/ElementsModalsComponents/DonationLevels';
import DonationLevelDraft from 'components/molecules/iFrameComp/DonationLevel';
import React from 'react';

function DonationLevelModal({ isShown, onClose }) {
  return (
    <Modal
      header="Donation Levels"
      isShown={isShown}
      hide={onClose}
      sideModal
      iframeChildren={<DonationLevelDraft />}>
      <DonationLevels />
    </Modal>
  );
}

export default DonationLevelModal;
