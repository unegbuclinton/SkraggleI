import Modal from 'components/layouts/Modal';
import React from 'react';
import EditCampaignModalComponent from '../CampaignModalComponent/EditModalComponenet';

function EditCampaignModal({ onClose, isShown }) {
  return (
    <Modal header="Edit Campaign" isShown={isShown} hide={onClose}>
      <EditCampaignModalComponent onClose={onClose} />
    </Modal>
  );
}

export default EditCampaignModal;
