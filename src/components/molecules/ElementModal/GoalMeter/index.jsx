import Modal from 'components/layouts/Modal';
import GoalMeterModalComponent from 'components/molecules/ElementsModalsComponents/GoalMeterModalComponent';
import React from 'react';

function GoalMeterModal({ isShown, onClose }) {
  return (
    <Modal header="Goal Meter" isShown={isShown} hide={onClose}>
      <GoalMeterModalComponent />
    </Modal>
  );
}

export default GoalMeterModal;
