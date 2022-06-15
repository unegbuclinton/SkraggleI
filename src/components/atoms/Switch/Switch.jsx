import React from 'react';
import { Label, Switched, SwitchInput } from './styles';

function Switch({ className, checked, onChange, type }) {
  return (
    <Label className={className}>
      <SwitchInput type={type} checked={checked} onChange={(e) => onChange(e?.target?.checked)} />
      <Switched />
    </Label>
  );
}

export default Switch;
