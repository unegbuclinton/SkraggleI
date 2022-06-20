import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

function SelectDropDown({
  placeholder,
  className,
  options,
  myValue,
  onChange,
  width,
  isMulti,
  isSearchable
}) {
  const defaultValue = (options, myValue) => {
    return options ? options.find((option) => option.value === myValue) : '';
  };
  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'white',
      fontSize: '1.4rem',
      outline: 'none'
    }),
    option: (styles) => ({ ...styles, fontSize: '1rem' })
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
        isSearchable={isSearchable}
        isMulti={isMulti}
        components={{ IndicatorSeparator: () => null }}
        placeholder={placeholder}
        styles={customStyles}
      />
    </Container>
  );
}

export default SelectDropDown;

const CustomSelect = styled(Select)`
  width: 60.2rem;
  .react-select {
    &__control {
      height: 4.4rem;
      font-weight: 400;
      border: 1px solid #9a9aa9;
    }

    &__option {
      font-size: 1.4rem;
    }

    &__dropdown-indicator {
      color: #9a9aa9;
    }
  }
`;

const Container = styled.div``;
