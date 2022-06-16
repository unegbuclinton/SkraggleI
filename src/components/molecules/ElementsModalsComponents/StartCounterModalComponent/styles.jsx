import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const StartCounterWrapper = styled.div`
  .counter-card {
    padding: 3.2rem 3.8rem 0rem 2.9rem;
    border-bottom: 1px solid ${COLORS.torquoise};
    margin-bottom: 3.2rem;
  }

  .counter-card__secondlayer {
    padding: 3.2rem 3.8rem 3.2rem 2.9rem;
  }
`;

export const StartCounterContainer = styled.div``;

export const StartCounterheader = styled.h1`
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.normal};
  color: ${COLORS['grey-400']};
  margin-bottom: 3.2rem;
`;

export const StartCounterFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6.4rem;
  margin-bottom: 2.4rem;

  .counter-input {
    width: 30.6rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-left: 1rem;
  }

  .amount-input {
    width: 16rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-left: 1rem;
  }
  .campaign-input {
    width: 21rem;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    margin-left: 1rem;
  }
  .counter-dropdown {
    width: 31.2rem;
    margin-left: -1.3rem;
  }

  .counter-checkbox {
    margin-left: -2rem;
  }
`;

export const StartCounterLabel = styled.label`
  width: 30%;
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-500']};
  font-weight: ${FONTWEIGHTS.normal};
`;

export const StartCounterFooter = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: flex-end;

  .archive-btn {
    width: 10.7rem;
    height: 5.1rem;
  }

  .update-btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;
