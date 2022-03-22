import React, { useState } from "react";
import { InputField, InputFieldIcon, Container } from "./styles";
import { DPIconSkraggleEyeOpen } from "icons";
import { DPIconSkraggleEyeClose } from "icons";

const Input = ({ type, placeholder, disabled, onChange, name, id, onBlur }) => {
  const [show, setShow] = useState(false);
  const toogleShowPassword = () => setShow((prev) => !prev);

  return (
    <Container>
      <InputField
        disabled={disabled}
        name={name}
        id={id}
        type={type === "password" ? (show ? "text" : "password") : type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {type === "password" && (
        <InputFieldIcon onClick={toogleShowPassword}>
          {show ? <DPIconSkraggleEyeOpen /> : <DPIconSkraggleEyeClose />}
        </InputFieldIcon>
      )}
    </Container>
  );
};

export default Input;
