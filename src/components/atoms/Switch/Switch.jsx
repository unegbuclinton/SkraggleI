import React, { useState } from 'react';
import { Label, Switched, SwitchInput } from './styles';

function Switch({ className }) {
  const [, setToogle] = useState(false);
  const toggleSwitch = () => {
    setToogle((prev) => !prev);
  };
  return (
    <Label className={className}>
      <SwitchInput type="checkbox" onClick={toggleSwitch} />
      <Switched />
    </Label>
  );
}

export default Switch;
