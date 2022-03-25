import React from "react";
import Modal from "components/layouts/Modal";
import CreateContactStepOne from "../CreateContact/CreateContactStepOne";

function ContactsModal({ onClose, isShown }) {
  return (
    <Modal header="Create New Contact" isShown={isShown}>
      <CreateContactStepOne onClose={onClose} />
    </Modal>
  );
}

export default ContactsModal;
