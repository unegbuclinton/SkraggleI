import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const EventWrapper = styled.div`
  border-bottom: ${COLORS.torquoise} 0.1rem solid;
  width: 100%;
  /* padding-left: 2.5rem; */

  .registration-switch {
    margin: 2.09rem 0 4rem 0;
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  gap: 3.2rem;
`;

export const SwitchLabel = styled.div`
  width: 27.1rem;
  height: 2.1rem;
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS.black};
`;

export const DetailLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-200']};
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  flex-wrap: wrap;
  .date-time-input {
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    width: 34.9rem;
    margin: 0.8rem 0 2.4rem 0;
  }

  .end-date {
    margin-bottom: 2rem;
  }
`;
