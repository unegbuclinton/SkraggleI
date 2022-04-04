import Modal from "components/layouts/Modal";
import CreateMailBlast from "components/molecules/MailblastModalComponents/CreateMailBlast";
import React from "react";

function CreateMailModal() {
  return (
    <Modal header="Create Mail Blasts" isShown>
      <CreateMailBlast />
    </Modal>
  );
}

export default CreateMailModal;
