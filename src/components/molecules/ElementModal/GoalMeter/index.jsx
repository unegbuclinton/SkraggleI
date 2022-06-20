import Modal from 'components/layouts/Modal';
import GoalMeterModalComponent from 'components/molecules/ElementsModalsComponents/GoalMeterModalComponent';
import React from 'react';

function GoalMeterModal() {
  return (
    <Modal header="Goal Meter" isShown>
      <GoalMeterModalComponent />
    </Modal>
  );
}

export default GoalMeterModal;
