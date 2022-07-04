import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled, { css } from 'styled-components';

export const FieldWrapper = styled(Card)`
  padding: 3.1rem 2.4rem 2.4rem 2.4rem;
  margin-top: 1.6rem;
`;

export const ContentsWrapper = styled.div`
  white-space: nowrap;
  .heading {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS['grey-500']};
    margin-bottom: 0.4rem;
  }
  .heading-text {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    color: ${COLORS['grey-400']};
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
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: ${FONTSIZES.xlarge};
    color: ${COLORS['grey-500']};
    font-weight: ${FONTWEIGHTS.normal};
  }

  p {
    font-size: ${FONTSIZES.small};
    color: ${COLORS['400']};
    font-weight: ${FONTWEIGHTS.normal};
  }
`;
