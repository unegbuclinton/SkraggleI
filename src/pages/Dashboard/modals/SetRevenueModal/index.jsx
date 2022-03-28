import Modal from 'components/layouts/Modal';
import SetRevenueModalContent from 'components/molecules/SetRevenue';
import React from 'react';

function SetRevenueModal({ onClose, isShown,setValue}) {
  return (
    <Modal header="Set Revenue Goals" isShown={isShown}>
      <SetRevenueModalContent onClose={onClose} setValue={setValue}/>
    </Modal>
  );
}

export default SetRevenueModal;
