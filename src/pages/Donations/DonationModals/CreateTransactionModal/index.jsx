import React from "react";
import Modal from "components/layouts/Modal";
import CompleteTransaction from "components/molecules/DonationModals/CreateTransaction/CompleteTransaction";
import DonationAssociation from "components/molecules/DonationModals/CreateTransaction/DonationAssociation";
import DonationInformation from "components/molecules/DonationModals/CreateTransaction/DonationInfomation";
import MultiformTabs from "components/molecules/MultiformTabs";

function CreateTransactionModal({ onCloseModal }) {
  const tabs = [
    {
      name: "DONATION INFORMATION",
      component: DonationInformation,
    },
    {
      name: "ASSOCIATIONS ",
      component: DonationAssociation,
    },
    {
      name: "COMPLETE TRANSACTION ",
      component: CompleteTransaction,
    },
  ];   
  return (
    <Modal
      header="Create a Transaction - Donation"
      isShown
      hide={onCloseModal}
      showClose={onCloseModal}
    >
      <MultiformTabs tabs={tabs} />
    </Modal>
  );
}

export default CreateTransactionModal;
