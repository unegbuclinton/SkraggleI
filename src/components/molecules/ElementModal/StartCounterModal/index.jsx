import Modal from 'components/layouts/Modal';
import StartCounterModalComponent from 'components/molecules/ElementsModalsComponents/StartCounterModalComponent';
import React from 'react';

function StartCounterModal({ isShown, onClose }) {
  return (
    <Modal header="Start Counter" isShown={isShown} hide={onClose} sideModal>
      <StartCounterModalComponent />
    </Modal>
  );
}

export default StartCounterModal;
