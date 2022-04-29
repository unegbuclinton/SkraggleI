import React, { useState } from "react";
import { InputContainer, InputSlider, SelectValue } from "./styles";

function Slider() {
  const [value, setValue] = useState(10);

  const sortValue = value * 2.5;

  return (
    <InputContainer>
      <SelectValue value={sortValue}>{value}%</SelectValue>

      <InputSlider
        value={value}
        min="1"
        max="100"
        onChange={(e) => setValue(e.target.value)}
      />
    </InputContainer>
  );
}

export default Slider;
