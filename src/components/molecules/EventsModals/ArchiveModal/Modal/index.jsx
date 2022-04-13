import React from "react";
import Modal from "components/layouts/Modal";
import ArchiveEvent from "../Archive";

function ArchiveModal({ isShown, onClose }) {
  return (
    <Modal header="Delete Event" isShown={isShown} hide={onClose}>
      <ArchiveEvent onClose={onClose} />
    </Modal>
  );
}

export default ArchiveModal;
