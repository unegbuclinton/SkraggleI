import Card from 'components/atoms/Card';
import MultiformTabs from 'components/molecules/MultiformTabs';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';
import DonationAmountFormMonthly from './donationAmountFormMonthly';
import DonationAmountFormOnce from './donationAmountFormOnce';

function DonationAmount({ onClose }) {
  const tabs = [
    {
      name: 'Give Once',
      component: DonationAmountFormOnce
    },
    {
      name: 'Monthly ',
      component: DonationAmountFormMonthly
    }
  ];
  return (
    <DonationMainWrapper>
      <h1 className="transaction-header">Suggested Amounts</h1>
      <p className="transaction-text">
        Larger suggested amounts increase the amount each donor gives
      </p>
      <MultiformTabs tabs={tabs} onClose={onClose} className="multiform" />
    </DonationMainWrapper>
  );
}

export default DonationAmount;

export const DonationMainWrapper = styled(Card)`
  padding: 4rem 4.4rem 2.4rem 4.4rem;

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
  .multiform {
    background-color: ${COLORS['pink-200']};
  }
`;
