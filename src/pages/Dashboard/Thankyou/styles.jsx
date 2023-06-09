import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const ThankYouWrapper = styled.div`
  margin-bottom: 1.6rem;
  .thankyou-text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS['header-grey']};
    margin: 0;
    padding: 2.4rem 0rem 1.7rem 4rem;
  }

  .thankyou-card {
    padding-bottom: 2.9em;
  }
`;

export const ThankYouBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.738rem;
  margin: 0rem 3.1rem 0rem 3.9rem;
  padding-top: 2.4rem;
  border-top: 1px solid ${COLORS.torquoise};
`;

export const ThankyouCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .card-text {
    &__one {
      font-size: 1.4rem;
      margin-bottom: 0.584rem;
    }
    &__two {
      font-size: 1.2rem;
      color: ${COLORS['grey-200']};
      margin-right: 9.4rem;
      word-break: keep-all;
    }
  }
  .contact {
    color: ${COLORS.pink};
    font-weight: ${FONTWEIGHTS.bold};
    font-size: ${FONTSIZES.small};
    white-space: nowrap;
  }
  .thank__btn {
    font-size: ${FONTSIZES.xsmall};
    background-color: ${COLORS.deepPurple};
  }

  .card-left {
    display: flex;
    justify-content: center;
    gap: 3.2rem;
    align-items: center;
  }
  .card-right {
    display: flex;
    justify-content: center;
    gap: 11rem;
    align-items: center;
  }
`;
