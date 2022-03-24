import Modal from "components/layouts/Modal";
import SetRevenueModalContent from "components/molecules/SetRevenue";
import React from "react";

function SetRevenueModal() {
  return (
    <Modal header="Set Revenue Goals" isShown >
      <SetRevenueModalContent />
    </Modal>
  );
}

export default SetRevenueModal;
