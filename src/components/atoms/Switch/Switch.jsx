import React, { useState } from 'react';
import { Label, Switched, SwitchInput } from './styles';

function Switch() {
  const [toggle, setToogle] = useState(false);
  const toggleSwitch = () => {
    setToogle((prev) => !prev);
  };
  console.log(toggle);
  return (
    <Label>
      <SwitchInput type="checkbox" onClick={toggleSwitch} />
      <Switched />
    </Label>
  );
}

export default Switch;
