import React, { useState } from "react";
import { InputField, InputFieldIcon, Container } from "./styles";
import { DPIconSkraggleEyeOpen } from "icons";
import { DPIconSkraggleEyeClose } from "icons";

const Input = ({ type, placeholder, change }) => {
  const [click, setClick] = useState(false);
  const Show = () => setClick((prev) => !prev);

  return (
    <Container>
      <InputField
        change={change}
        type={!click ? type === "text" : "password"}
        placeholder={placeholder}
      />
      {type === "password" && (
        <InputFieldIcon onClick={Show}>
          {click ? <DPIconSkraggleEyeOpen /> : <DPIconSkraggleEyeClose />}
        </InputFieldIcon>
      )}
    </Container>
  );
};

export default Input;
