import React, { useState } from "react";
import {
  CheckboxContainer,
  CheckIcon,
  HiddenCheckbox,
  StyledCheckbox,
} from "./styles";

const Checkbox = ({ className, styledClass, label, radial, ...props }) => {
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
      <StyledCheckbox checked={state} radial={radial} className={styledClass}>
        <CheckIcon />
      </StyledCheckbox>
      <p className="label-text">{label}</p>
    </CheckboxContainer>
  );
};
export default Checkbox;
