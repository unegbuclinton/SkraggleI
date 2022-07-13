import Modal from 'components/layouts/Modal';
import StickyButton from 'components/molecules/ElementsModalsComponents/StickyButton';
import DraftStickyButton from 'components/molecules/iFrameComp/stickyButton';
import React from 'react';

function StickyButtonModal({ onClose, isShown }) {
  return (
    <Modal
      header="Sticky Button"
      isShown={isShown}
      hide={onClose}
      sideModal
      iframeChildren={<DraftStickyButton />}
    >
      <StickyButton onclose={onClose} />
    </Modal>
  );
}

export default StickyButtonModal;
