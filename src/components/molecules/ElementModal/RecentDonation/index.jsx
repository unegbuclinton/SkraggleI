import Modal from 'components/layouts/Modal';
import RecentDonationModalComponent from 'components/molecules/ElementsModalsComponents/RecentDonationModalComponent';
import React from 'react';

function RecentDonationModal({ isShown, onClose }) {
  return (
    <Modal header="Recent Donation" isShown={isShown} hide={onClose}>
      <RecentDonationModalComponent />
    </Modal>
  );
}

export default RecentDonationModal;
