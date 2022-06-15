import React from 'react';
import styled from 'styled-components';
import PaymentOption from './paymentOption';
import ProcessingFeeForm from './processingFeeForm';

function ProcessingFee({ IncrementTab, DecrementTab }) {
  return (
    <ProcessingFeeWrapper>
      <ProcessingFeeForm IncrementTab={IncrementTab} DecrementTab={DecrementTab} />
      <PaymentOption></PaymentOption>
    </ProcessingFeeWrapper>
  );
}

export default ProcessingFee;

export const ProcessingFeeWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  height: 100%;
  overflow: hidden;
  padding-bottom: 12.5rem;
`;
