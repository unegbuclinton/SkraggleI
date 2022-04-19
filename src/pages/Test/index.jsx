import Checkbox from 'components/atoms/CheckBox';
import RadioGroup from 'components/atoms/RadioGroup';
import React from 'react';
import styled from 'styled-components';

const Test = () => {
  return (
    <Wrapper>
      <RadioGroup
        radioData={[
          { labelText: 'First', value: 1 },
          {
            labelText: 'Lorem ipsum, dolor sit amet consectetur',
            value: 2,
          },
        ]}
      />
      <Checkbox radial inverted checked={true} />
    </Wrapper>
  );
};

export default Test;

const Wrapper = styled.div`
  /* .checkbox {
    width: 2rem;
    height: 2rem;
  } */
`;
