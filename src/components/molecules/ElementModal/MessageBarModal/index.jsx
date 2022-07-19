import Modal from 'components/layouts/Modal';
import MessageBar from 'components/molecules/ElementsModalsComponents/MessageBar';
import MessageBarDraft from 'components/molecules/iFrameComp/MessageBar';
import React from 'react';

function MessageBarModal({ onClose, isShown }) {
  return (
    <Modal
      header="Message Bar"
      isShown={isShown}
      hide={onClose}
      sideModal
      iframeChildren={<MessageBarDraft />}>
      <MessageBar />
    </Modal>
  );
}

export default MessageBarModal;
