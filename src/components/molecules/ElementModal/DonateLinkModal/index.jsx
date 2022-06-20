import Modal from 'components/layouts/Modal';
import React from 'react';
import LinkModal from '../../ElementsModalsComponents/DonateLink';

function DonateLinkModal({ onClose, isShown }) {
  return (
    <Modal header="Donate Link" isShown={isShown} hide={onClose}>
      <LinkModal onClose={onClose} />
    </Modal>
  );
}

export default DonateLinkModal;
