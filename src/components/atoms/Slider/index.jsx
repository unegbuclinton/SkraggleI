import React, { useState } from 'react';
import { InputContainer, Range, SelectValue } from './styles';

function Slider({ className, text }) {
  const [value, setValue] = useState(10);
  const sortValue = value * 2.8;

  return (
    <InputContainer className={className}>
      <SelectValue value={sortValue}>
        {value}
        {text}
      </SelectValue>

      <Range
        type="range"
        value={value}
        min="1"
        max="100"
        step="1"
        onChange={(e) => setValue(e.target.value)}
      />
    </InputContainer>
  );
}

export default Slider;
