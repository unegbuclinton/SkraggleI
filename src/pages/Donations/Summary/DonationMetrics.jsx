import Card from 'components/atoms/Card';
import ProgressBar from 'components/atoms/ProgressBar/ProgressBar';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

const DonationMetrics = () => {
  return (
    <DonationMetricsContainer>
      <DonationGoalsWrapper>
        <DonationGoalsHeader>Donation Goals</DonationGoalsHeader>
        <DonationGoalsContentWrapper>
          {/* <ProgressBar heading="Yearly Goal" value="19540.23"/> */}
          <ProgressBar
            value={19540.23}
            target={18275}
            heading="Yearly Goals"
            raisedLabel="raised"
            targetLabel="Target"
          />
        </DonationGoalsContentWrapper>
      </DonationGoalsWrapper>
    </DonationMetricsContainer>
  );
};

export default DonationMetrics;

const DonationMetricsContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const DonationGoalsWrapper = styled(Card)`
  padding: 0 4.7rem 0 4.1rem;
  flex: 1;
`;
const DonationGoalsHeader = styled.div`
  padding: 2.4rem 0 1.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS['header-grey']};

  &:after {
    content: '';
    position: absolute;
    background: ${COLORS.torquoise};
    height: 1px;
    width: calc(100% - 3.1rem);
    bottom: 0;
    left: 0;
  }
`;

const DonationGoalsContentWrapper = styled.div`
  padding: 8.7rem 0 15.5rem;
`;
