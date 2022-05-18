import React from 'react';
import Select from 'react-select';

function SelectDropDown({
  options,
  defaultValue,
  onChange,
  styles,
  width,
  isMulti,
  classNamePrefix
}) {
  return (
    <>
      <Select
        styles={styles}
        classNamePrefix={classNamePrefix}
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        width={width}
        isMulti={isMulti}
        components={{ IndicatorSeparator: () => null }}
      />
    </>
  );
}

export default SelectDropDown;
