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
  .set-date {
    margin-left: 19.4rem;
  }
  .amount {
    margin: 0 0 1.5rem 3.6rem;
  }
  .multi {
    margin-left: 8.9rem;
  }
  .add-amount {
    width: 10rem;
    margin-right: 1.5rem;
  }
  .marchin-funds {
    margin-right: -3rem;
    position: relative;
    right: 2rem;
  }
  .element-label {
    height: 4.4rem;
    margin-top: 0.4rem;
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

  margin-top: 3.2rem;

  .archive-btn {
    width: 10.7rem;
    height: 5.1rem;
  }

  .update-btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;

export const UrlLabel = styled.span`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS['grey-400']};
  display: flex;
  height: 1.4rem;
  width: 1.4rem;
  border: 0.1rem solid ${COLORS['grey-400']};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: small;
  margin: 0.3rem 0 0 18.8rem;
`;

export const CopyContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  padding-left: 2.4rem;
`;

export const CopyLabel = styled.label`
  width: 10rem;
  display: flex;
  align-items: center;
  font-weight: ${FONTWEIGHTS.medium};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-400']};
`;
