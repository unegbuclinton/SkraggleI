import FormCardLayout from 'components/layouts/FormCardLayout';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconPageNavigation } from 'icons';
import React from 'react';
import styled from 'styled-components';

function PaymentOption() {
  return (
    <PaymentOptionWrapper>
      <FormCardLayout>
        <PaymentOptionHeader>
          <DPIconPageNavigation className="arrow-left" />
          Payment Option
        </PaymentOptionHeader>
      </FormCardLayout>
    </PaymentOptionWrapper>
  );
}

export default PaymentOption;

export const PaymentOptionWrapper = styled.div``;

export const PaymentOptionHeader = styled.div`
  display: flex;
  height: 5.631rem;
  background: ${COLORS['pink-200']};
  font-weight: ${FONTWEIGHTS.bold};
  font-size: ${FONTSIZES.base};
  line-height: 1.7rem;
  color: ${COLORS['blue-black']};
  /* justify-content: center; */
  align-items: center;
  padding-left: 3.198rem;
  gap: 2.484rem;

  .arrow-left {
    height: 1.04rem;
    width: 0.62rem;
    fill: ${COLORS['blue-black']};
    stroke: ${COLORS['blue-black']};
    color: ${COLORS['blue-black']};
    transform: rotate(-180deg);
  }
`;
