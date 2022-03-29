import React from "react";
import CreateTags from "../createTages";
import Modal from "components/layouts/Modal";

function TagsModal({ isShown, onClose }) {
  return (
    <Modal header="Create New Tags" isShown={isShown} hide={onClose}>
      <CreateTags onClose={onClose} />
    </Modal>
  );
}

export default TagsModal;
