import Modal from 'components/layouts/Modal';
import React from 'react';
import CampaignModalComponent from '../CampaignModalComponent';

function CreateCampaignModal({ onClose}) {
  return (
    <Modal header="Create a Campaign" onClose={onClose} isShown={true}>
        <CampaignModalComponent />
    </Modal>
  );
}

export default CreateCampaignModal;
