import Modal from 'components/layouts/Modal';
import P2PLinkModalComponent from 'components/molecules/ElementsModalsComponents/P2PLinkModalComponent';
import React from 'react';

function P2PLinkModal() {
  return (
    <Modal header="P2P Link" isShown>
      <P2PLinkModalComponent />
    </Modal>
  );
}

export default P2PLinkModal;
