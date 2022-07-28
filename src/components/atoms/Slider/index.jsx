import React from 'react';
import { InputContainer, Range, SelectValue } from './styles';
function Slider({ className, text, sliderText, onChange, value, min, max }) {
  // const [value, setValue] = useState(10);
  const sortValue = value * 2.8;
  return (
    <InputContainer className={className}>
      <SelectValue className={sliderText} value={sortValue}>
        {value}
        {text}
      </SelectValue>
      <Range type="range" value={value} min={min} max={max} step="1" onChange={onChange} />
    </InputContainer>
  );
}
export default Slider;
