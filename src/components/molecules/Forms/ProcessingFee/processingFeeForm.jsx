import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import RadioGroup from 'components/atoms/RadioGroup';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function ProcessingFeeForm({ IncrementTab, DecrementTab }) {
  return (
    <ProcessingFormWrapper>
      <ProcessingFormCard>
        <h1 className="transaction-header">Transaction Cost</h1>
        <p className="transaction-text">
          Give your donors the opportunity to cover the transaction costs for <br /> their donation.
          If enabled by default, 92% of donors using our system <br /> agree to cover the
          transaction costs.
        </p>

        <UnsubscribeOption>
          <RadioGroup
            radioData={[
              {
                labelText: 'Require that your donors cover the costs',
                value: 1
              },
              {
                labelText: 'Give your donors the option to cover the costs, default to yes',
                value: 2
              },
              {
                labelText: 'Give your donors the option to cover the costs, default to no',
                value: 3
              },
              {
                labelText: 'Dont allow your donors to cover the costs',
                value: 4
              }
            ]}
          />
        </UnsubscribeOption>
        <div className="underline" />
        <ButtonsWrapper>
          <Button type="button" className="back-button" onClick={DecrementTab}>
            Back
          </Button>
          <Button type="button" className="next-button" onClick={IncrementTab}>
            Next
          </Button>
        </ButtonsWrapper>
      </ProcessingFormCard>
    </ProcessingFormWrapper>
  );
}

export default ProcessingFeeForm;

export const ProcessingFormWrapper = styled.form`
  display: flex;
  /* max-width: 53rem; */
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex: 0.65;

  .transaction-header {
    color: ${COLORS.deepPurple};
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    margin-bottom: 0.8rem;
  }
  .transaction-text {
    color: ${COLORS['grey-400']};
    font-size: ${FONTSIZES.xsmall};
    margin-bottom: 2.55rem;
  }
  .underline {
    border: 1px solid ${COLORS.torquoise};
  }
`;

export const ProcessingFormCard = styled(Card)`
  padding: 4rem 4.4rem 2.4rem 4.4rem;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const UnsubscribeOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 3.322rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: right;
  margin-top: 26.9rem;
  margin-bottom: 2.4rem;

  .back-button {
    width: 10.7rem;
    height: 5.1rem;
    background-color: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    border-radius: 0.340356rem;
    color: ${COLORS['gray-500']};
    font-size: ${FONTSIZES.base};
    font-weight: ${FONTWEIGHTS.xbold};
  }
  .next-button {
    width: 20.5rem;
    height: 5.1rem;
    background: ${COLORS.pink};
    font-weight: ${FONTWEIGHTS.xbold};
    font-size: ${FONTSIZES.base};
    border-radius: 0.340356rem;
    color: ${COLORS.white};
  }
`;
