import React from "react";
import Modal from "components/layouts/Modal";
import CraeteNewHouseHold from "../createNewHouseHold";

function HouseHoldModal({ onClose, isShown }) {
  return (
    <Modal header="Create New HouseHold" isShown={isShown}>
      <CraeteNewHouseHold onClose={onClose} />
    </Modal>
  );
}

export default HouseHoldModal;
