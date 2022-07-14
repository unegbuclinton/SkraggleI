import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled, { css } from 'styled-components';

export const ArchivedWrapper = styled(Card)`
  padding: 3.2rem 2.4rem 2.4rem;
  margin-top: 1.6rem;
`;

export const ArchivedContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2.5rem 0 2.4rem 3.6rem;
  border: 0.08rem solid ${COLORS['porcelain-white']};
  justify-content: space-between;

  .message {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS['grey-500']};
  }
`;

export const ActionText = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS['grey-500']};
  cursor: pointer;

  .delete {
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS.pink};
    cursor: pointer;
  }

  ${({ red }) =>
    red &&
    css`
      color: ${COLORS.pink};
    `};
`;
