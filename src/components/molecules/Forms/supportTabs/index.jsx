import FormCardLayout from 'components/layouts/FormCardLayout';
import React from 'react';
import styled from 'styled-components';
import SupportTabComponent from './SupportTabComponent';
import SupportTabFormComponent from './SupportTabFormComponent';

function SupportTab({ IncrementTab, DecrementTab }) {
  return (
    <SupportTabContainer>
      <SupportTabComponent IncrementTab={IncrementTab} DecrementTab={DecrementTab} />
      <FormCardLayout>
        <SupportTabFormComponent />
      </FormCardLayout>
    </SupportTabContainer>
  );
}

export default SupportTab;

const SupportTabContainer = styled.div`
  display: flex;
  gap: 1.6rem;
`;
