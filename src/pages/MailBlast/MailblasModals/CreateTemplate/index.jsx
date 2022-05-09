import Modal from 'components/layouts/Modal';
import CreateTemplate from 'components/molecules/MailblastModalComponents/CreateTemplate';
import React from 'react';

function CreateTemplateModal({ onCloseModal, isShown }) {
  return (
    <Modal header="Create a Template " isShown={isShown} hide={onCloseModal}>
      <CreateTemplate onCloseModal={onCloseModal} />
    </Modal>
  );
}

export default CreateTemplateModal;
