import React from "react";
import Modal from "components/layouts/Modal";

import ClonePackage from "../ClonePackage";

function ClonePackageModal({ isShown, onClose }) {
  return (
    <Modal header="Clone Event" isShown={isShown} hide={onClose}>
      <ClonePackage onClose={onClose} />
    </Modal>
  );
}

export default ClonePackageModal;
