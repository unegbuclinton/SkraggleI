import Modal from 'components/layouts/Modal';
import ButtonGroup from 'components/molecules/ElementsModalsComponents/ButtonGroup';
import React from 'react';

function ButtonGroupModal({ isShown, onClose }) {
  return (
    <Modal header="Button Group" isShown={isShown} hide={onClose}>
      <ButtonGroup />
    </Modal>
  );
}

export default ButtonGroupModal;
