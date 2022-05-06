import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const ModalWrapper = styled(Card)`
  padding: 3.1rem 0 4.6rem 0;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  .btn-yes {
    width: 20.5rem;
    height: 5.1rem;
    border-radius: 0.34rem;
    font-weight: ${FONTWEIGHTS.xbold};
    font-size: ${FONTSIZES.small};
  }

  .btn-no {
    width: 20.5rem;
    height: 5.1rem;
    border-radius: 0.34rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    color: ${COLORS['gray-500']};
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    background-color: ${COLORS.white};
  }
`;
