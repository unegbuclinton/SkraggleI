import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconPaypal } from 'icons';
import React from 'react';
import styled from 'styled-components';

function PaymentProcessor() {
  return (
    <IntegrationWrapper>
      <IntegrationHeading>Payment Processors</IntegrationHeading>
      <IntegrationContainer>
        <IntegrationContent>
          <DPIconPaypal />
          <div>
            <IntegrationHeading className="mail-text">Paypal</IntegrationHeading>
            <IntegrationText>
              Keep your contact data updated by connecting your Mailchimp account to Skraggle
            </IntegrationText>
          </div>
        </IntegrationContent>
        <div>
          <Button className="mail-btn">Manage</Button>
        </div>
      </IntegrationContainer>
      <IntegrationContainer>
        <IntegrationContent>
          <DPIconPaypal />
          <div>
            <IntegrationHeading className="mail-text">Paypal</IntegrationHeading>
            <IntegrationText>
              Keep your contact data updated by connecting your Mailchimp account to Skraggle
            </IntegrationText>
          </div>
        </IntegrationContent>
        <div>
          <Button className="mail-btn">Manage</Button>
        </div>
      </IntegrationContainer>
      <IntegrationContainer>
        <IntegrationContent>
          <DPIconPaypal />
          <div>
            <IntegrationHeading className="mail-text">Paypal</IntegrationHeading>
            <IntegrationText>
              Keep your contact data updated by connecting your Mailchimp account to Skraggle
            </IntegrationText>
          </div>
        </IntegrationContent>
        <div>
          <Button className="mail-btn">Manage</Button>
        </div>
      </IntegrationContainer>
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
