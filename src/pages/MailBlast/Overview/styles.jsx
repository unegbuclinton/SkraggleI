import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const NewstellerWrapper = styled.div`
  margin-top: 1.6rem;

  .overview-card {
    padding-bottom: 10rem;
  }
`;

export const NewstellerTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 2.4rem 2.4rem 2.4rem;
  gap: 3.2rem;

  .newsteller-left {
    flex: 1;
    .top {
      display: flex;
      justify-content: space-between;
      font-size: ${FONTSIZES.lg};
      font-weight: ${FONTWEIGHTS.bold};
      color: ${COLORS['gray-500']};
      margin-bottom: 1.6rem;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      font-size: ${FONTSIZES.xlarge};
      font-weight: ${FONTWEIGHTS.bold};

      .left {
        color: ${COLORS['grey-500']};
      }

      .right {
        color: ${COLORS['navy-blue']};
      }
    }
  }

  .newsteller-right {
    border: 1px solid ${COLORS['primary-blue']};
    font-size: ${FONTSIZES.base};
    padding: 1rem 1.4rem 0.9rem 1.4rem;
    text-align: center;

    .newsteller-btn {
      width: 8.2rem;
      height: 2.8rem;
      font-size: ${FONTSIZES.xsmall};
      margin-bottom: 1.8rem;
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
        color: ${COLORS.pink};
        font-weight: ${FONTWEIGHTS.bold};
      }

      &__text {
        font-size: ${FONTSIZES.xlarge};
        font-weight: ${FONTWEIGHTS.bold};
      }
    }
  }
`;
