import Modal from 'components/layouts/Modal';
import TopSupportersModalComponent from 'components/molecules/ElementsModalsComponents/TopSupportersModalComponent';
import TopSupporterDraft from 'components/molecules/iFrameComp/TopSupporters';
import React from 'react';

function TopSupportersModal({ isShown, onClose }) {
  return (
    <Modal
      header="Top Supporters"
      isShown={isShown}
      hide={onClose}
      sideModal
      iframeChildren={<TopSupporterDraft />}>
      <TopSupportersModalComponent />
    </Modal>
  );
}

export default TopSupportersModal;
