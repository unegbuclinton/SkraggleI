import RadioGroup from 'components/atoms/RadioGroup';
import SubscriptionUpdate from 'components/molecules/MailblastModalComponents/SubscriptionUpdate';
import React from 'react';
import styled from 'styled-components';
const Test = () => {
  return (
    <Wrapper>
      <RadioGroup
        radioData={[
          { labelText: 'First', value: 1 },
          {
            labelText:
              'Lorem ipsum, dolor sit amet consectetur',
            value: 2,
          },
        ]}
      />
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
