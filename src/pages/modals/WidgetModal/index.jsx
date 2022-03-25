import Modal from "components/layouts/Modal";
import Widget from "components/molecules/Widgets";
import React from "react";

function WidgetModal({onCloseWidget,isShown}) {
  return (
    <Modal header="Add Widget" isShown={isShown}>
      <Widget onCloseWidget={onCloseWidget}/>
    </Modal>
  );
}

export default WidgetModal;
