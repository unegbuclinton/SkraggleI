import Modal from "components/layouts/Modal";
import Attachment from "components/molecules/MailblastModalComponents/Attachment";
import React from "react";

function AttachmentModal() {
  return <Modal header='Attachments' isShown>
      <Attachment />
  </Modal>;
}

export default AttachmentModal;
