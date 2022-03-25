import Modal from "components/layouts/Modal";
import Widget from "components/molecules/Widgets";
import React from "react";

function WidgetModal() {
  return (
    <Modal header="Add Widget" isShown>
      <Widget />
    </Modal>
  );
}

export default WidgetModal;
