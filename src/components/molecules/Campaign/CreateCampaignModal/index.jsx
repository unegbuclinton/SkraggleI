import Modal from 'components/layouts/Modal';
import React from 'react';
import CampaignModalComponent from '../CampaignModalComponent';

function CreateCampaignModal({ onClose, isShown}) {
  return (
    <Modal header="Create a Campaign" isShown={isShown} hide={onClose}>
        <CampaignModalComponent onClose={onClose} />
    </Modal>
  );
}

export default CreateCampaignModal;
