import Modal from "components/layouts/Modal";
import CreateMailBlast from "components/molecules/MailblastModalComponents/CreateMailBlast";
import React from "react";

function CreateMailModal({isShown, onCloseModal}) {
  return (
    <Modal header="Create Mail Blasts" isShown={isShown} hide={onCloseModal}> 
      <CreateMailBlast onCloseModal={onCloseModal}/>
    </Modal>
  );
}

export default CreateMailModal;
