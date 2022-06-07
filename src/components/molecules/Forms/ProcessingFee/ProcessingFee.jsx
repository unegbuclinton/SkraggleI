import React from 'react';
import styled from 'styled-components';
import PaymentOption from './paymentOption';
import ProcessingFeeForm from './processingFeeForm';

function ProcessingFee() {
  return (
    <ProcessingFeeWrapper>
      <ProcessingFeeForm></ProcessingFeeForm>
      <PaymentOption></PaymentOption>
    </ProcessingFeeWrapper>
  );
}

export default ProcessingFee;

export const ProcessingFeeWrapper = styled.div`
  display: flex;
`;
