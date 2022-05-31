import Modal from 'components/layouts/Modal';
import React from 'react';
import CreateTodoModal from '../CreateTodoModal';

function TodoModal({ onClose, isShown }) {
  return (
    <Modal header="Create To-Do" isShown={isShown} hide={onClose}>
      <CreateTodoModal onClose={onClose} />
    </Modal>
  );
}

export default TodoModal;
