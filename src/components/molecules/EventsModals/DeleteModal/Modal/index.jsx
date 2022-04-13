import React from "react";
import Modal from "components/layouts/Modal";
import DeleteEvent from "../DeleteEvent";

function DeleteEventModal({ isShown, onClose }) {
  return (
    <Modal header="Delete Event" isShown={isShown} hide={onClose}>
      <DeleteEvent onClose={onClose} />
    </Modal>
  );
}

export default DeleteEventModal;
