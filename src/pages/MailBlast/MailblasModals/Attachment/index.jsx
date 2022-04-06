import Modal from "components/layouts/Modal";
import Attachment from "components/molecules/MailblastModalComponents/Attachment";
import React from "react";

function AttachmentModal({ onClose, isShown }) {
  return (
    <Modal header="Attachments" isShown={isShown} hide={onClose} plain>
      <Attachment onClose={onClose} />
    </Modal>
  );
}

export default AttachmentModal;
