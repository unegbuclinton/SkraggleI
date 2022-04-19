import React, { useState } from "react";
import Modal from "components/layouts/Modal";
import RecurringAssociation from "components/molecules/DonationModals/Recurring/RecurringAssociation";
import RecurringInformation from "components/molecules/DonationModals/Recurring/RecurringInfomation";

function RecurringModal({ onCloseModal }) {
  const [show, setShow] = useState(true);

  return (
    <Modal header="Recurring" isShown hide={onCloseModal}>
      {show ? (
        <RecurringInformation
          onCloseModal={onCloseModal}
          onChangeModal={() => setShow(false)}
        />
      ) : (
        <RecurringAssociation show={setShow} />
      )}
    </Modal>
  );
}
export default RecurringModal;
