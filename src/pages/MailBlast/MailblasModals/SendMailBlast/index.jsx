import Modal from "components/layouts/Modal";
import SendMail from "components/molecules/MailblastModalComponents/SendMail";
import React from "react";

function SendMailBlastModal() {
  return (
    <Modal header="Send Mail blasts" isShown>
      <SendMail />
    </Modal>
  );
}

export default SendMailBlastModal;
