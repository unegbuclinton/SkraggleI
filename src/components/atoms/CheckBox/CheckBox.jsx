import React, { useState } from 'react';
import {
  CheckboxContainer,
  CheckIcon,
  HiddenCheckbox,
  StyledCheckbox,
} from './styles';

const Checkbox = ({ className, ...props }) => {
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
    </CheckboxContainer>
  );
};
export default Checkbox;
