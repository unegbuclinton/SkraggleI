import Modal from "components/layouts/Modal";
import MailTo from "components/molecules/MailblastModalComponents/MailTo";
import React from "react";

function MailToModal() {
  return (
    <Modal header="To" isShown>
      <MailTo />
    </Modal>
  );
}

export default MailToModal;
