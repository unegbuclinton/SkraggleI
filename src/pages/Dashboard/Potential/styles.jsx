import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const PotentialWrapper = styled.div`
  margin-bottom: 1.6rem;
  .thankyou-text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS['header-grey']};
    margin: 0;
    padding: 2.4rem 0rem 1.7rem 4rem;
  }
  .potential-card {
    padding-bottom: 2.9em;
  }
`;

export const PotentialBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.738rem;
  margin: 0rem 3.1rem 0rem 3.9rem;
  padding-top: 2.4rem;
  border-top: 1px solid ${COLORS.torquoise};
`;

export const PotentialCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardLeft = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.2rem;
  align-items: center;
  margin-right: 9.4rem;
  .card-text {
    &__one {
      font-size: 1.4rem;
      margin-bottom: 0.584rem;
    }
    &__two {
      font-size: 1.2rem;
      color: ${COLORS['grey-200']};
      /* word-break: break-word; */
    }
  }
`;

export const CardRight = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 11rem;
  align-items: center;

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
`;
