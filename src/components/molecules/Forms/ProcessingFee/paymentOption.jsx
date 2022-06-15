import Button from 'components/atoms/Button/Button';
import FormCardLayout from 'components/layouts/FormCardLayout';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconCoverTransaction, DPIconPageNavigation } from 'icons';
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
        <PaymentOptionBody>
          <div className="payment">
            $25
            <span className="payment-currency">USD/month</span>
          </div>
          <DPIconCoverTransaction className="cover-transaction" />
          <div className="transaction-cost">
            Transaction Costs
            <span className="transaction-amount">$1.90</span>
          </div>
          <div className="donation-cost">
            Donate Now
            <span className="transaction-amount">$2.90</span>
          </div>
          <Button className="donate-button">Donate</Button>
        </PaymentOptionBody>
      </FormCardLayout>
    </PaymentOptionWrapper>
  );
}

export default PaymentOption;

export const PaymentOptionWrapper = styled.div`
  max-width: 37.954rem;
  width: 100%;
  .donate-button {
    max-width: 30.815rem;
    width: 100%;
    height: 5.105rem;
    background: ${COLORS.pink};
    border-radius: 0.340356rem;
    margin-top: 11.696rem;
    margin-bottom: 2.201rem;
  }
`;

export const PaymentOptionHeader = styled.div`
  display: flex;
  height: 5.631rem;
  background: ${COLORS['pink-200']};
  font-weight: ${FONTWEIGHTS.bold};
  font-size: ${FONTSIZES.base};
  line-height: 1.7rem;
  color: ${COLORS['blue-black']};
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

export const PaymentOptionBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .payment {
    margin-top: 3.269rem;
    align-items: center;
    text-align: center;
    font-weight: ${FONTWEIGHTS.bold};
    font-size: 6rem;
    line-height: 7rem;
    color: #ff576b;
  }
  .payment-currency {
    font-weight: 500;
    font-size: 12.8659px;
    line-height: 15px;
    color: #3c3c3c;
  }
  .cover-transaction {
    margin-top: 2.6rem;
  }
  .transaction-cost {
    margin-top: 3.2rem;
    font-size: ${FONTSIZES.base};
    line-height: 152.69%;
    color: #7b7b7b;
  }
  .transaction-amount {
    font-weight: ${FONTWEIGHTS.bold};
    font-size: ${FONTSIZES.base};
    line-height: 152.69%;
    color: #1e003e;
    margin-left: 1.6rem;
  }
  .donation-cost {
    margin-top: 1.6rem;
    font-size: ${FONTSIZES.base};
    line-height: 152.69%;
    color: #7b7b7b;
  }
`;
