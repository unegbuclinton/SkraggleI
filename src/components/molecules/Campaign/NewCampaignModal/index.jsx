import Modal from 'components/layouts/Modal';
import React from 'react';
import CampaignModalComponent from '../CampaignModalComponent';

function NewCampaignModal({ onClose}) {
  return (
    <Modal header="Create a Campaign" onClose={onClose} isShown={true}>
        <CampaignModalComponent />
    </Modal>
  );
}

export default NewCampaignModal;
