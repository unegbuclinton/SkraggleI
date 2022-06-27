import Modal from 'components/layouts/Modal';
import ImageCardModalComponent from 'components/molecules/ElementsModalsComponents/ImageCardModalComponent';
import React from 'react';

function ImageCardModal({ isShown, onClose }) {
  return (
    <Modal header="Image Card" isShown={isShown} hide={onClose}>
      <ImageCardModalComponent />
    </Modal>
  );
}

export default ImageCardModal;
