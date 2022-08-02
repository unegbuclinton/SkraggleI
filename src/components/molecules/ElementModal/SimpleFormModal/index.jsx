import Modal from 'components/layouts/Modal';
import SimpleFormModalComponent from 'components/molecules/ElementsModalsComponents/SimpleFormModalComponent';
import SimpleFormIframes from 'components/molecules/iFrameComp/SimpleForm/index';
import React from 'react';

function SimpleFormModal({ isShown, onClose }) {
  return (
    <Modal
      header="Simple Form"
      isShown={isShown}
      hide={onClose}
      sideModal
      iframeChildren={<SimpleFormIframes />}>
      <SimpleFormModalComponent onClose={onClose} />
    </Modal>
  );
}

export default SimpleFormModal;
