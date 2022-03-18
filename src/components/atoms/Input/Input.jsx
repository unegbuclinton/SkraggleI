import React, { useState } from "react";
import { InputField, InputFieldIcon, Container } from "./styles";
import { DPIconSkraggleEyeOpen } from "icons";
import { DPIconSkraggleEyeClose } from "icons";

const Input = ({ type, placeholder, change, onChange, name, id,onBlur }) => {
  const [click, setClick] = useState(false);
  const Show = () => setClick((prev) => !prev);

  return (
    <Container>
      <InputField
        name={name}
        id={id}
        change={change}
        type={!click ? {type} === "text" : "password"}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {type === "password" && (
        <InputFieldIcon onClick={Show}>
          {click ? <DPIconSkraggleEyeClose /> : <DPIconSkraggleEyeOpen />}
        </InputFieldIcon>
      )}
    </Container>
  );
};

export default Input;
