import React, { useState } from 'react';
import { Label, Switched, SwitchInput } from './styles';

function Switch({ className, onChange }) {
  const [toggle, setToogle] = useState(false);
  const toggleSwitch = () => {
    setToogle((prev) => !prev);
  };
  console.log(toggle);
  return (
    <Label className={className}>
      <SwitchInput type="checkbox" onChange={onChange} onClick={toggleSwitch} />
      <Switched />
    </Label>
  );
}

export default Switch;
