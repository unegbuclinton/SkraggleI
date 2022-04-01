import Modal from "components/layouts/Modal";
import Unsubscribe from "components/molecules/MailblastModalComponents/Unsubsccribe";
import React from "react";

function UnsubscribeModal() {
  return (
    <Modal header="Unsubscribe from future Mail Blasts" isShown>
      <Unsubscribe />
    </Modal>
  );
}

export default UnsubscribeModal;
