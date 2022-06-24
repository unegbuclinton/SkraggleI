import Modal from 'components/layouts/Modal';
import SocialProof from 'components/molecules/ElementsModalsComponents/SocialProof';
import React from 'react';

function SocialProofModal({ isShown, onClose }) {
  return (
    <Modal header="Social Proof" isShown={isShown} hide={onClose}>
      <SocialProof />
    </Modal>
  );
}

export default SocialProofModal;
