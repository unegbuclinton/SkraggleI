import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const EventFormContainer = styled.div``;

export const Container = styled.form`
  display: flex;
  gap: 3.2rem;
  .input-field {
    width: 20.9rem;
    height: 2.9rem;
    background-color: ${COLORS.white};
    border: 0.1rem ${COLORS['gray-500']} solid;
    border-radius: 0.5rem;
    outline: none;
    padding: 1rem;
  }
  .button-container {
    display: flex;
    gap: 1.6rem;
    .btn-save {
      width: 5.5rem;
      height: 2.9rem;
      border-radius: 0.5rem;
      font-weight: ${FONTWEIGHTS.medium};
      font-size: ${FONTSIZES.xsmall};
      color: ${COLORS.white};
      padding: 0;
    }

    .btn-cancel {
      background-color: ${COLORS.white};
      width: 5.6rem;
      height: 2.9rem;
      border: 0.1rem solid ${COLORS['gray-500']};
      border-radius: 0.5rem;
      color: ${COLORS['grey-400']};
      font-size: ${FONTSIZES.xsmall};
      font-weight: ${FONTWEIGHTS.medium};
      padding: 0;
      margin-right: 6.7rem;
    }
  }
`;
