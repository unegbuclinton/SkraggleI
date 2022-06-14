import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const PromoCodeWrapper = styled(Card)`
  padding: 3.1rem 2.4rem 3.5rem 2.4rem;
  margin-top: 1.6rem;
`;

export const ContentsWrapper = styled.div`
  margin-right: 13.4rem;
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

export const ActionWrapper = styled.div`
  .action {
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS['grey-500']};
    cursor: pointer;
  }

  .delete {
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS.pink};
    cursor: pointer;
  }
`;
