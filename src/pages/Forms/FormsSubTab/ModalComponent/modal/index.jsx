import Modal from 'components/layouts/Modal';
import React from 'react';
import UrlModal from '../UrlModal';

function UrlModalComponent({ isShown, onClose }) {
  return (
    <Modal header="Your form is live!" isShown={isShown} hide={onClose}>
      <UrlModal onClose={onClose} />
    </Modal>
  );
}

export default UrlModalComponent;
