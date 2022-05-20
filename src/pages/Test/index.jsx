import SelectDropDown from 'components/atoms/GenericDropdown';
// import Slider from 'components/atoms/Slider';
import React from 'react';
import styled from 'styled-components';

function Test() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  return (
    <Wrapper>
      {/* <Slider /> */}
      <SelectDropDown options={options} className="dropdown" classNamePrefix="select" />
    </Wrapper>
  );
}

export default Test;

const Wrapper = styled.div`
  margin: 20px 0 0 20px;
  .dropdown {
    width: 20.2rem;
    .react-select__control {
      height: 3.4rem;
    }
    .react-select__option {
      background-color: red;
    }
  }
`;
