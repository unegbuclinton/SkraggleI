import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const EmailConfirmWrapper = styled(Card)`
  margin-top: 5.887rem;
  padding: 5.2rem 4.5rem 5.6rem 4.5rem;
  .forgot-confirm {
    &__heading {
      display: flex;
      justify-content: center;
      margin-top: 4.2rem;
      font-weight: ${FONTWEIGHTS.bold};
      font-size: ${FONTSIZES.xlarge};
      color: ${COLORS.deepPurple};
    }
    &__description {
      display: flex;
      justify-content: center;
      margin-top: 1.6rem;
      font-size: ${FONTSIZES.base};
      color: rgba(0, 0, 0, 0.43);
      text-align-last: center;
    }
    &__proceed {
      margin-top: 6.1rem;
      font-weight: ${FONTWEIGHTS.bold};
      height: 6.4rem;
      border-radius: 0.5rem;
    }
  }
`;
