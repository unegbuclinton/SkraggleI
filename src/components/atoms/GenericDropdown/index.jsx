import React from 'react';
import Select from 'react-select';

function SelectDropDown({ className, options, defaultValue, onChange, styles, width, height }) {
  return (
    <>
      <Select
        styles={styles}
        className={className}
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        width={width}
        height={height}
      />
    </>
  );
}

export default SelectDropDown;
