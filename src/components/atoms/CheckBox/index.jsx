import React, { useState } from 'react';
import { CheckboxContainer, CheckIcon, HiddenCheckbox, StyledCheckbox } from './styles';

const Checkbox = ({
  className,
  styledClass,
  label,
  radial,
  checked,
  inverted,
  pink,
  id,
  ...props
}) => {
  const [state, setState] = useState(false);
  const handleCheckboxChange = (event) => {
    setState(event?.target?.checked);
  };
  return (
    <CheckboxContainer className={className} pink={pink} checked={checked || state} id={id}>
      <HiddenCheckbox
        checked={checked || state}
        onChange={handleCheckboxChange}
        id={id}
        {...props}
      />
      <StyledCheckbox
        checked={checked || state}
        radial={radial}
        pink={pink}
        inverted={inverted}
        className={styledClass}>
        <CheckIcon />
      </StyledCheckbox>
      <p className="label-text">{label}</p>
    </CheckboxContainer>
  );
};
export default Checkbox;
