import SelectDropDown from 'components/atoms/GenericDropdown';
// import Slider from 'components/atoms/Slider';
import React from 'react';
import styled from 'styled-components';

function Test() {
  // const customStyles = {
  //   control: (base) => ({
  //     ...base,
  //     height: 45,
  //     minHeight: 45,
  //     border: '1px red solid'
  //   }),
  //   dropdownIndicator: (base) => ({
  //     ...base,
  //     color: 'red'
  //   })
  // };

  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ];

  return (
    <Wrapper>
      {/* <Slider /> */}
      <SelectDropDown classNamePrefix="react-select" />
    </Wrapper>
  );
}

export default Test;

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  /* .dropdown {
    width: 200px;
  } */
  .react-select__control {
    width: 14.4rem;
  }
`;
