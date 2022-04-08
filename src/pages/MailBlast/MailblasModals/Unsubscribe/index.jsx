import Modal from "components/layouts/Modal";
import Unsubscribe from "components/molecules/MailblastModalComponents/Unsubsccribe";
import React from "react";

function UnsubscribeModal({ isShown, onCloseModal }) {
  return (
    <Modal
      header="Unsubscribe from future Mail Blasts"
      isShown={isShown}
      hide={onCloseModal}
    >
      <Unsubscribe onCloseModal={onCloseModal} /> 
    </Modal>
  );
}

export default UnsubscribeModal;
