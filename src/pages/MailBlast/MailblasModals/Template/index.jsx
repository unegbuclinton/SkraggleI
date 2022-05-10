import Modal from 'components/layouts/Modal';
import Template from 'components/molecules/MailblastModalComponents/Template';
import React from 'react';

function TemplateModal({ isShown, onClose }) {
  return (
    <Modal header="Start by selecting a template" isShown={isShown} hide={onClose}>
      <Template onClose={onClose} />
    </Modal>
  );
}

export default TemplateModal;
