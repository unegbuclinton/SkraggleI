import React from "react";
import Modal from "components/layouts/Modal";
import MultiStepForm from "../CreateContactStep";

function ContactsModal({ onClose, isShown }) {
  return (
    <Modal header="Create New Contact" isShown={isShown}>
      <MultiStepForm onClose={onClose} />
    </Modal>
  );
}

export default ContactsModal;
