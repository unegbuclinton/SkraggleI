import React from "react";
import Modal from "components/layouts/Modal";
import DeleteField from "../DeleteField";

function DeleteFieldModal({ isShown, onClose }) {
  return (
    <Modal header="Delete Field" isShown={isShown} hide={onClose}>
      <DeleteField onClose={onClose} />
    </Modal>
  );
}

export default DeleteFieldModal;
