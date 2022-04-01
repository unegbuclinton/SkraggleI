import React from "react";
import Modal from "components/layouts/Modal";
import CreateCompany from "../ModalContents";

function CompanyModal({ onClose, isShown }) {
  return (
    <Modal header="Create New Company" isShown={isShown} hide={onClose}>
      <CreateCompany onClose={onClose} />
    </Modal>
  );
}

export default CompanyModal;
