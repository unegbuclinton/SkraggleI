import Modal from 'components/layouts/Modal';
import RecentDonationModalComponent from 'components/molecules/ElementsModalsComponents/RecentDonationModalComponent';
import RecentDonationDraft from 'components/molecules/iFrameComp/RecentDonation';
import React from 'react';

function RecentDonationModal({ isShown, onClose }) {
  return (
    <Modal
      header="Recent Donation"
      isShown={isShown}
      hide={onClose}
      sideModal
      iframeChildren={<RecentDonationDraft />}>
      <RecentDonationModalComponent />
    </Modal>
  );
}

export default RecentDonationModal;
