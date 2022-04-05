import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const RadioButtons = ({ value, name }) => {
  const [select, setSelect] = useState('any');
  // const [checked, setChecked] = useState('any');
  const handleSelectChange = (event) => {
    const value = event.target.value;
    // console.log(event.target, value);
    setSelect(value);
  };

  console.log(select, value);
  return (
    <Item>
      <RadioButton
        type="radio"
        name={name}
        value={value}
        checked={select === value}
        onChange={handleSelectChange}
      />
      <RadioButtonLabel></RadioButtonLabel>
      <label >Auto accept better price only</label>
    </Item>
  );
};

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

const RadioButtonLabel = styled.span`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 2.322rem;
  height: 2.322rem;
  border-radius: 50%;
  background: white;
  border: 1px solid #e6eff1;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 2.322rem;
  height: 2.322rem;
  margin-right: 10px;
  position: relative;
  cursor: pointer;

  ${(props) =>
    props.checked &&
    css`
      &:checked {
        cursor: default;
      }
    `}

  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      border: 1px solid #00913A;
      &::after {
        position: absolute;
        content: "";
        display: block;
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        background: #00913A; 
        top: 50%;
        left: 50%;
        top: 50%;
        left: 50%; 
        transform: translate(-52.5%, -52.5%); 
      }
    }
  `}
`;

export default RadioButtons;
