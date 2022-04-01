import Modal from 'components/layouts/Modal';
import React from 'react';
import P2PModalComponent from '../P2PFundraiserModalComponent';

function CreateP2PModal({ onClose, isShown}) {
  return (
    <Modal header="Create P2P Fundraiser" onClose={onClose} isShown={isShown} hide={onClose}>
        <P2PModalComponent onClose={onClose}/>
    </Modal>
  );
}

export default CreateP2PModal;
