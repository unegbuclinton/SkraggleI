import Modal from "components/layouts/Modal";
import SendMail from "components/molecules/MailblastModalComponents/SendMail";
import React from "react";

function SendMailBlastModal({isShown,onCloseModal}) {
  return (
    <Modal header="Send Mail blasts" isShown={isShown} hide={onCloseModal}>
      <SendMail onCloseModal={onCloseModal} />
    </Modal>
  );
}

export default SendMailBlastModal;
