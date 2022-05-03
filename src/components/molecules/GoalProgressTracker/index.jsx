import ProgressBar from 'components/atoms/ProgressBar';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

const GoalProgressTracker = ({ heading, value, target }) => {
  const percentage = Math.round((value / target) * 100);
  return (
    <GPTWrapper>
      <GPTHeading>{heading}</GPTHeading>
      <ProgressBar value={value} target={target} subColor/>
      <GPTMetricsWrapper>
        <div className="metric-wrapper__content">
          <span className="metric-wrapper__content-value metric-count">
            ${value.toLocaleString()}
          </span>
          <span className="metric-text">raised</span>
          <span className="metric-wrapper__content-percentage">
            ({percentage}%)
          </span>
        </div>

        <div className="metric-wrapper__content ">
          <span className="metric-text">Target</span>
          <span className="metric-count">${target.toLocaleString()}</span>
        </div>
      </GPTMetricsWrapper>
    </GPTWrapper>
  ); 
};

export default GoalProgressTracker;

const GPTWrapper = styled.div``;

const GPTHeading = styled.p`
  font-weight: ${FONTWEIGHTS.bold};
  letter-spacing: 0.02em;
  color: ${COLORS.deepPurple};
  font-size: ${FONTSIZES.base};
  margin-bottom: 0.8rem;
`;

const GPTMetricsWrapper = styled.div`
  display: flex;
  font-size: ${FONTSIZES.small};
  margin-top: 1.1rem;
  justify-content: space-between;

  .metric-count {
    color: ${COLORS['turfts-blue']};
    font-weight: ${FONTWEIGHTS.bold};
  }

  .metric-text {
    color: ${COLORS['turfts-blue']};
    font-weight: ${FONTWEIGHTS.normal};
    margin-right: 1.257rem;
  }

  .metric-wrapper {
    &__content {
      display: flex;

      &-value {
        margin-right: 0.734rem;
      }
      &-percentage {
      }
    }
  }
`;
