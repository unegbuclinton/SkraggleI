import Modal from 'components/layouts/Modal';
import P2PButtonsModalComponent from 'components/molecules/ElementsModalsComponents/P2PButtonsModalComponent';
import React from 'react';

function P2PButtonsModal() {
  return (
    <Modal header="P2P Buttons" isShown>
      <P2PButtonsModalComponent />
    </Modal>
  );
}

export default P2PButtonsModal;
