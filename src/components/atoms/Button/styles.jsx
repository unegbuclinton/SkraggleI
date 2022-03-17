import { COLORS } from 'constants/colors';
import { FONTWEIGHTS } from 'constants/font-spec';
import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  outline: none;
  border: none;
  background-color: ${COLORS.pink};
  color: ${COLORS.white};
  font-weight: ${FONTWEIGHTS.bold};
  width: 14.4rem;
  padding: ${({ large }) => (large ? '1.6rem 0' : '1.1rem 0')};
  border-radius: ${({ pill }) => (pill ? '4rem' : '')};

  ${({ pill }) =>
    pill &&
    css`
      border-radius: 4rem;
      padding: 0.65rem 0;
    `};

  ${({ action }) =>
    action &&
    css`
      padding: 1.1rem 2.7rem;
      border-radius: 3.6304px;
      width: 12.4rem;
    `};
`;
