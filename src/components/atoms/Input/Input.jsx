import React, { useState } from "react";
import { InputField, InputFieldIcon, Container } from "./styles";
import { DPIconSkraggleEyeOpen } from "icons";
import { DPIconSkraggleEyeClose } from "icons";

const Input = ({
  type,
  placeholder,
  disabled,
  onChange,
  name,
  id,
  onBlur,
  className,
}) => {
  const [show, setShow] = useState(false);
  const toggleShowPassword = () => setShow((prev) => !prev);

  return (
    <Container>
      <InputField
        className={className}
        disabled={disabled}
        name={name}
        id={id}
        type={type === "password" ? (show ? "text" : "password") : type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {type === "password" && (
        <InputFieldIcon onClick={toggleShowPassword}>
          {show ? <DPIconSkraggleEyeOpen /> : <DPIconSkraggleEyeClose />}
        </InputFieldIcon>
      )}
    </Container>
  );
};

export default Input;
