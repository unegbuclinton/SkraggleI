import React, { useState } from 'react';
import {
  CheckboxContainer,
  CheckIcon,
  HiddenCheckbox,
  StyledCheckbox,
} from './styles';

const Checkbox = ({ className,label, ...props }) => {
  const [state, setState] = useState(false);

  const handleCheckboxChange = (event) => {
    setState(event?.target?.checked);
  };
  return (
    <CheckboxContainer className={className} checked={state}>
      <HiddenCheckbox
        checked={state}
        onChange={handleCheckboxChange}
        {...props}
      />
      <StyledCheckbox checked={state}>
        <CheckIcon />
      </StyledCheckbox>
      <p className="label-text">
        {label}
      </p>
    </CheckboxContainer>
  );
};
export default Checkbox;
