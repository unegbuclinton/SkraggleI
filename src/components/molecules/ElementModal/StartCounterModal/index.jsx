import Modal from 'components/layouts/Modal';
import StartCounterModalComponent from 'components/molecules/ElementsModalsComponents/StartCounterModalComponent';
import React from 'react';

function StartCounterModal() {
  return (
    <Modal header="Start Counter" isShown>
      <StartCounterModalComponent />
    </Modal>
  );
}

export default StartCounterModal;
