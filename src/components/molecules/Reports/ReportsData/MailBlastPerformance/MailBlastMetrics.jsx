import StatisticsTracker from 'components/molecules/StatisticsTracker';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function MailBlastMetrics() {
  return (
    <MailBlastMetricsWrapper>
      <FRAContentWrapper>
        <div className="data-wrapper">
          <h3>10</h3>
          <p>Total Mail Blasts</p>
        </div>
        <div className="data-wrapper">
          <h3>$5,477.00</h3>
          <p>Total Raised</p>
        </div>
        <div className="data-wrapper">
          <h3>$1401.00</h3>
          <p>Total Revenue</p>
        </div>
      </FRAContentWrapper>

      <NewstellerBody>
        <p className="body-header">
          Statistics <span className="added-text">(12 Recipients)</span>
        </p>
        <div className="newsteller-metric">
          <StatisticsTracker
            percentage={80}
            colour="#1AB0B0"
            num="(32)"
            value="20"
            header="Delivered"
            text="Unopened"
            blues
          />
          <StatisticsTracker
            percentage={25}
            colour="#1AB0B0"
            num="(12)"
            value="2"
            text="Unsubscribed"
            blues
          />
          <StatisticsTracker
            percentage={5}
            colour="#1AB0B0"
            num="(2)"
            value="5"
            text="Rejected"
            blues
          />

          <div className="sumed-value">
            <p className="sumed-value__num">$123</p>
            <p className="sumed-value__text">Raised</p>
          </div>
        </div>
      </NewstellerBody>
    </MailBlastMetricsWrapper>
  );
}

export default MailBlastMetrics;

export const MailBlastMetricsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FRAContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12.367rem;
  padding: 5.227rem 7.427rem;
  text-align: center;

  .data-wrapper {
    h3 {
      font-size: ${FONTSIZES.xxlarge};
      font-weight: ${FONTWEIGHTS.bold};
      margin-bottom: 2.246rem;
    }

    p {
      color: ${COLORS['snooze-grey']};
      text-transform: uppercase;
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.medium};
    }
  }
`;

export const NewstellerBody = styled.div`
  padding-left: 2.4rem;
  .body-header {
    font-size: ${FONTSIZES.xlarge};
    font-weight: ${FONTWEIGHTS.bold};
    color: ${COLORS['grey-500']};
    padding-bottom: 4.6rem;

    .added-text {
      color: ${COLORS['navy-blue']};
    }
  }

  .newsteller-metric {
    display: flex;
    gap: 10.1rem;
    justify-content: center;
    align-items: center;

    .sumed-value {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 6.2rem;

      &__num {
        font-size: 3rem;
        color: #1ab0b0;
        font-weight: ${FONTWEIGHTS.bold};
      }

      &__text {
        font-size: ${FONTSIZES.xlarge};
        font-weight: ${FONTWEIGHTS.bold};
      }
    }
  }
`;
