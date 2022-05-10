import styled from 'styled-components';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';

export const Form = styled.form`
  padding-top: 6.134rem;
  .reset-card {
    padding: 2.4rem 4.5rem 4rem 4.5rem;
  }
  .reset-header {
    text-align: center;
    margin-bottom: 3.861rem;
    color: ${COLORS.deepPurple};
    font-size: ${FONTSIZES.xlarge};
    font-weight: ${FONTWEIGHTS.bold};
  }
  .description {
    margin: 9rem 0 1.5rem 0;
    color: ${COLORS.deepPurple};
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
  }

  .regpassword__btn {
    margin-top: 1.6rem;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  margin-bottom: 1rem;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.medium};
  margin-top: -0.5rem;
`;
