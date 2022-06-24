import Modal from 'components/layouts/Modal';
import RecentDonationModalComponent from 'components/molecules/ElementsModalsComponents/RecentDonationModalComponent';
import React from 'react';

function RecentDonationModal() {
  return (
    <Modal header="Recent Donation" isShown>
      <RecentDonationModalComponent />
    </Modal>
  );
}

export default RecentDonationModal;
