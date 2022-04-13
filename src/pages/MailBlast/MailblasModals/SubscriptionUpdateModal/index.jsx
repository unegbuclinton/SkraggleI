import Modal from "components/layouts/Modal";
import React from "react";
import SubscriptionUpdate from "../../../../components/molecules/MailblastModalComponents/SubscriptionUpdate";

function SubscriptionUpdateModal() {
  return (
    <Modal isShown plain contrast>
      <SubscriptionUpdate />
    </Modal>
  );
}

export default SubscriptionUpdateModal;
