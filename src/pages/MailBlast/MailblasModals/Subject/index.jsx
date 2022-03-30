import Modal from "components/layouts/Modal";
import Subject from "components/molecules/MailblastModalComponents/Subject";
import React from "react";

function SubjectModal() {
  return (
    <Modal header="Subject" isShown>
      <Subject />
    </Modal>
  );
}

export default SubjectModal;
