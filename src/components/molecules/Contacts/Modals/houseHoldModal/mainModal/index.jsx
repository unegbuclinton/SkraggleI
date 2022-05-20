import Modal from 'components/layouts/Modal';
import React from 'react';
import CreateNewHouseHold from '../createNewHouseHold';

function HouseHoldModal({ onClose, isShown }) {
  return (
    <Modal header="Create New HouseHold" isShown={isShown} hide={onClose}>
      <CreateNewHouseHold onClose={onClose} />
    </Modal>
  );
}

export default HouseHoldModal;
