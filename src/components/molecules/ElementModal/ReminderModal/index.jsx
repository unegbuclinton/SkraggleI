import Modal from 'components/layouts/Modal';
import Reminder from 'components/molecules/ElementsModalsComponents/Reminder';
import ReminderDraft from 'components/molecules/iFrameComp/Reminder';
import React from 'react';

function ReminderModal({ onClose, isShown }) {
  return (
    <Modal
      header="Reminder"
      isShown={isShown}
      hide={onClose}
      sideModal
      iframeChildren={<ReminderDraft />}>
      <Reminder onclose={onClose} />
    </Modal>
  );
}

export default ReminderModal;
