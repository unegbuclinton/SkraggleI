import Modal from 'components/layouts/Modal';
import QrCode from 'components/molecules/ElementsModalsComponents/QrCode';
import React from 'react';

function QrCodeModal({ isShown, onClose }) {
  return (
    <Modal header="QR Code" isShown={isShown} hide={onClose}>
      <QrCode />
    </Modal>
  );
}

export default QrCodeModal;
