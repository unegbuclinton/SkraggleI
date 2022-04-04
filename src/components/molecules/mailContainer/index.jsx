import React from "react";
import { DPIconCancel } from "icons";
import { MailWrapper } from "./styles";

function MailContainer({ mail, Delete }) {
  return (
    <MailWrapper mail={mail}>
      <p>{mail}</p>
      <DPIconCancel onClick={Delete} />
    </MailWrapper>
  );
}

export default MailContainer;
