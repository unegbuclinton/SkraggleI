import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

function SelectDropDown({ className, options, myValue, onChange, width, isMulti }) {
  const defaultValue = (options, myValue) => {
    return options ? options.find((option) => option.value === myValue) : '';
  };
  return (
    <Container className={className}>
      <CustomSelect
        className={className}
        classNamePrefix="react-select"
        value={defaultValue(options, myValue)}
        onChange={(value) => onChange(value)}
        options={options}
        width={width}
        isMulti={isMulti}
        components={{ IndicatorSeparator: () => null }}
      />
    </Container>
  );
}

export default SelectDropDown;

const CustomSelect = styled(Select)`
  width: 60.2rem;
  .react-select__control {
    height: 4.4rem;
    font-weight: 400;
    font-size: 1.2rem;
    border: 1px solid #9a9aa9;
  }

  .react-select__dropdown-indicator {
    color: #9a9aa9;
  }
`;
