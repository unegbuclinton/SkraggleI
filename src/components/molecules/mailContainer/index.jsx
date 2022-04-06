import React from "react";
import { DPIconCancel } from "icons";
import { MailWrapper } from "./styles";

function MailContainer({ mail, Delete, id }) {
  return (
    <MailWrapper id={id} mail={mail}>
      <p>{mail}</p>
      <span id={id} onClick={Delete}>
        <DPIconCancel />
      </span>
    </MailWrapper>
  );
}

export default MailContainer;
