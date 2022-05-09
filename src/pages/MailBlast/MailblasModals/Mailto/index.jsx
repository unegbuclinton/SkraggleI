import Modal from 'components/layouts/Modal';
import MailTo from 'components/molecules/MailblastModalComponents/MailTo';
import React from 'react';

function MailToModal({ onClose, isShown }) {
  return (
    <Modal header="To" isShown={isShown} hide={onClose}>
      <MailTo onClose={onClose} />
    </Modal>
  );
}

export default MailToModal;
