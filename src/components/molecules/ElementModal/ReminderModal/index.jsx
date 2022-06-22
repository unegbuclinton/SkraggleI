import Modal from 'components/layouts/Modal';
import Reminder from 'components/molecules/ElementsModalsComponents/Reminder';
import React from 'react';

function ReminderModal({ onClose, isShown }) {
  return (
    <Modal header="Sticky Button" isShown={isShown} hide={onClose}>
      <Reminder onclose={onClose} />
    </Modal>
  );
}

export default ReminderModal;
