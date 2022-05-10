import Modal from 'components/layouts/Modal';
import Subject from 'components/molecules/MailblastModalComponents/Subject';
import React from 'react';

function SubjectModal({ onClose, isShown }) {
  return (
    <Modal header="Subject" isShown={isShown} hide={onClose}>
      <Subject onClose={onClose} />
    </Modal>
  );
}

export default SubjectModal;
