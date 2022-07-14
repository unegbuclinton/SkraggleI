import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const DonationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
`;
export const DonationWrapper = styled.div`
  width: 100%;
  .donation-text {
    position: relative;
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS['header-grey']};
    padding: 2.4rem 0rem 1.7rem 0rem;
    margin: 0 4.7rem 0 4rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      border: 1px solid ${COLORS.torquoise};
      height: 1px;
      width: calc(100% - 3rem);
    }
  }

  .progress-tracker {
    margin: 0rem 4.7rem 0 4.1rem;
    padding-bottom: 5rem;
    padding-top: 5.3rem;
    border-top: 1px solid ${COLORS.torquoise};
  }
`;

export const RevenueWrapper = styled.div`
  width: 100%;
  .revenue-text {
    position: relative;
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS['header-grey']};
    padding: 2.4rem 0rem 1.7rem;
    margin: 0 4.7rem 0 4rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      border: 1px solid ${COLORS.torquoise};
      height: 1px;
      width: calc(100% - 3rem);
    }
  }
  .revenue-progress {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    padding: 3.7rem 0 5.593rem 0;
    margin: 0 5.6rem 0 4rem;

    .set-goal-btn {
      background-color: ${COLORS.deepPurple};
    }

    &__text {
      font-size: ${FONTSIZES.lg};
      font-weight: ${FONTWEIGHTS.medium};
      color: ${COLORS['header-grey']};
    }
  }
`;
