import React from 'react';
import { Label, Switched, SwitchInput } from './styles';

function Switch({ className, checked, toggle, setToogle }) {
  const toggleSwitch = (event) => {
    setToogle(event?.target?.checked);
  };
  return (
    <Label className={className}>
      <SwitchInput type="checkbox" checked={checked || toggle} onChange={toggleSwitch} />
      <Switched />
    </Label>
  );
}

export default Switch;
