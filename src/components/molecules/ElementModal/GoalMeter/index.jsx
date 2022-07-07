import Modal from 'components/layouts/Modal';
import GoalMeterModalComponent from 'components/molecules/ElementsModalsComponents/GoalMeterModalComponent';
import GoalMeter from 'components/molecules/iFrameComp/GoalMeter';
import React from 'react';

function GoalMeterModal({ isShown, onClose }) {
  return (
    <Modal
      header="Goal Meter"
      isShown={isShown}
      hide={onClose}
      sideModal
      iframeChildren={<GoalMeter />}>
      <GoalMeterModalComponent />
    </Modal>
  );
}

export default GoalMeterModal;
