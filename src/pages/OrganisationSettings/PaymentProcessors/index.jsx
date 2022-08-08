import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconCryptoPay, DPIconPaypal, DPIconStripe } from 'icons';
import React from 'react';
import styled from 'styled-components';

function PaymentProcessor() {
  const data = [
    {
      header: 'CryptoPay',
      text: ' Keep your contact data updated by connecting your Paypal account to Skraggle',
      btnText: 'Manage',
      icon: <DPIconCryptoPay />
    },
    {
      header: 'Paypal',
      text: ' Keep your contact data updated by connecting your Paypal account to Skraggle',
      btnText: 'Manage',
      icon: <DPIconPaypal />
    },
    {
      header: 'Stripe',
      text: ' Keep your contact data updated by connecting your Paypal account to Skraggle',
      btnText: 'Manage',
      icon: <DPIconStripe />
    }
  ];
  return (
    <IntegrationWrapper>
      <IntegrationHeading>Payment Processors</IntegrationHeading>

      {data.map(({ header, text, btnText, icon }, idx) => (
        <IntegrationContainer key={idx}>
          <IntegrationContent>
            {icon}
            <div>
              <IntegrationHeading className="mail-text">{header}</IntegrationHeading>
              <IntegrationText>{text}</IntegrationText>
            </div>
          </IntegrationContent>
          <div>
            <Button className="mail-btn">{btnText}</Button>
          </div>
        </IntegrationContainer>
      ))}
    </IntegrationWrapper>
  );
}

export default PaymentProcessor;

const IntegrationWrapper = styled(Card)`
  padding: 2.2rem 2.4rem 4rem 2.4rem;
  .mail-btn {
    padding: 1.6rem 4.5rem;
  }
  /* height: 100%;
  overflow-y: auto; */
  margin-top: 1.6rem;
`;

const IntegrationHeading = styled.h2`
  font-weight: ${FONTWEIGHTS.bold};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['gray-1']};
  margin-bottom: 2.4rem;
`;

const IntegrationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0.1rem solid ${COLORS.torquoise};
  padding: 2.8rem 2.4rem 3.1rem 2.4rem;
  .mail-text {
    margin-bottom: 1rem;
  }
  margin-bottom: 1rem;
`;

const IntegrationContent = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const IntegrationText = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.base};
  color: ${COLORS['gray-500']};
`;
