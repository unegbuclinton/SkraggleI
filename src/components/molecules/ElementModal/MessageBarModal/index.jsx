import Modal from 'components/layouts/Modal';
import MessageBar from 'components/molecules/ElementsModalsComponents/MessageBar';
import React from 'react';

function MessageBarModal({ onClose, isShown }) {
  return (
    <Modal header="Message Bar" isShown={isShown} hide={onClose}>
      <MessageBar />
    </Modal>
  );
}

export default MessageBarModal;
