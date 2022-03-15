import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  border-radius: ${({ pill }) => (pill ? '4rem' : '')};
  ${({ pill }) =>
    pill &&
    css`
      border-radius: 4rem;
    `};
`;
