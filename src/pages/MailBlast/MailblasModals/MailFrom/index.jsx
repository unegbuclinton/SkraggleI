import Modal from 'components/layouts/Modal';
import MailFrom from 'components/molecules/MailblastModalComponents/MailFron';
import React from 'react';

function MailFromModal({ onClose, isShown }) {
  return (
    <Modal header="From" isShown={isShown} hide={onClose}>
      <MailFrom onClose={onClose} />
    </Modal>
  );
}

export default MailFromModal;
