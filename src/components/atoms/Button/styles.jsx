import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  outline: none;
  border: none;
  background-color: ${COLORS.pink};
  color: ${COLORS.white};
  font-weight: ${FONTWEIGHTS.bold};
  cursor: pointer;
  width: 100%;
  padding: ${({ large }) => (large ? '1.6rem 0' : '1.1rem 0')};
  border-radius: ${({ pill }) => (pill ? '4rem' : '')};

  ${({ pill }) =>
    pill &&
    css`
      border-radius: 4rem;
      padding: 0.65rem 0;
      width: 9.173rem;
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.xsmall};
      border: none;
      outline: none;
    `};
  ${({ action }) =>
    action &&
    css`
      padding: 1.1rem 2.7rem;
      border-radius: 3.6304px;
      width: 12.4rem;
    `};
  ${({ auth }) =>
    auth &&
    css`
      border-radius: 0.5rem;
      height: 6.4rem;
      font-size: ${FONTSIZES.small};
      line-height: 1.6rem;
      color: ${COLORS.white};
    `};
  ${({ invert }) => {
    return (
      invert &&
      css`
        background-color: ${COLORS.white};
        border: 1px solid ${COLORS['moore-grey']};
        color: ${COLORS['moore-grey']};
      `
    );
  }}
  ${({ disabled }) => {
    return (
      disabled &&
      css`
        background-color: ${COLORS['dark-gray']};
        border: 1px solid ${COLORS['moore-grey']};
        color: ${COLORS['moore-grey']};
      `
    );
  }}
  ${({ error }) =>
    error &&
    css`
      color: ${COLORS.pink};
      background-color: ${COLORS['error-background']};
    `};

  ${({ success }) =>
    success &&
    css`
      background-color: ${COLORS['success-background']};
      color: ${COLORS['check-green']};
    `};
`;
