import { COLORS } from 'constants/colors';
import { FONTWEIGHTS, FONTSIZES } from 'constants/font-spec';
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
    width: 47.4rem;
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS['header-grey']};
    padding: 2.4rem 0rem 1.7rem 0rem;
    margin: 0 4.7rem 0 4rem;
  }

  .progress-tracker {
    margin: 0rem 4.7rem 6rem 4.1rem;
    padding-bottom: 5rem;
    padding-top: 5.3rem;
    border-top: 1px solid ${COLORS.torquoise};
  }
`;

export const RevenueWrapper = styled.div`
  width: 100%;
  .revenue-text {
    width: 47.4rem;
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS['header-grey']};
    padding: 2.4rem 0rem 1.7rem 4.1rem;
    margin: 0;
  }
  .revenue-progress {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    padding: 3.7rem 0 5.593rem 0;
    margin: 0 5.6rem 0 4rem;
    border-top: 1px solid ${COLORS.torquoise};

    &__text {
      font-size: ${FONTSIZES.lg};
      font-weight: ${FONTWEIGHTS.medium};
      color: ${COLORS['header-grey']};
    }
  }
`;
