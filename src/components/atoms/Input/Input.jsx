import { DPIconSkraggleEyeClose, DPIconSkraggleEyeOpen } from 'icons';
import React, { useState } from 'react';
import { Container, InputField, InputFieldIcon } from './styles';

const Input = ({
  type,
  placeholder,
  disabled,
  onChange,
  name,
  id,
  onBlur,
  className,
  autoWidth,
  containerClass,
  value
}) => {
  const [show, setShow] = useState(false);
  const toggleShowPassword = () => setShow((prev) => !prev);

  return (
    <Container className={containerClass}>
      <InputField
        className={className}
        autoWidth={autoWidth}
        disabled={disabled}
        name={name}
        id={id}
        type={type === 'password' ? (show ? 'text' : 'password') : type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {type === 'password' && (
        <InputFieldIcon onClick={toggleShowPassword}>
          {show ? <DPIconSkraggleEyeOpen /> : <DPIconSkraggleEyeClose />}
        </InputFieldIcon>
      )}
    </Container>
  );
};

export default Input;
