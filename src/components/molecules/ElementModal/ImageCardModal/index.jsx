import Modal from 'components/layouts/Modal';
import ImageCardModalComponent from 'components/molecules/ElementsModalsComponents/ImageCardModalComponent';
import React from 'react';

function ImageCardModal() {
  return (
    <Modal header="Image Card" isShown>
      <ImageCardModalComponent />
    </Modal>
  );
}

export default ImageCardModal;
