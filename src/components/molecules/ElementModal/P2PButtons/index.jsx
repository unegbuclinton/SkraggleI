import Modal from 'components/layouts/Modal';
import P2PButtonsModalComponent from 'components/molecules/ElementsModalsComponents/P2PButtonsModalComponent';
import P2PButtonIframe from 'components/molecules/iFrameComp/P2PButtons';
import React from 'react';

function P2PButtonsModal({ isShown, onClose }) {
  return (
    <Modal
      header="P2P Buttons"
      isShown={isShown}
      hide={onClose}
      sideModal
      iframeChildren={<P2PButtonIframe />}>
      <P2PButtonsModalComponent />
    </Modal>
  );
}

export default P2PButtonsModal;
