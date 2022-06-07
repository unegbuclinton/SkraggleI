import FormCardLayout from 'components/layouts/FormCardLayout';
import React from 'react';
import styled from 'styled-components';

function DonationPayment() {
  return (
    <PaymentOptionWrapper>
      <FormCardLayout></FormCardLayout>
    </PaymentOptionWrapper>
  );
}

export default DonationPayment;

export const PaymentOptionWrapper = styled.div`
  display: flex;
  flex: 1;
`;
