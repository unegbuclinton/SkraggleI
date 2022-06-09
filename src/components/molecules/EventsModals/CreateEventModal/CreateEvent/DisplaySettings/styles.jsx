import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const DetailsSubHeading = styled.h2`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.xlarge};
  color: ${COLORS.black};
  margin-bottom: 1.6rem;
`;

export const DetailLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-200']};
`;

export const EventWrapper = styled.div`
  border-bottom: ${COLORS.torquoise} 0.1rem solid;
  width: 100%;
  .details-input {
    width: 100%;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    margin: 0.8rem 0 2.4rem 0;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  .option-switch {
    margin: 1.6rem 0 2.4rem 0;
  }

  .date {
    margin-bottom: 4rem;
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

export const InputWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  flex-wrap: wrap;
  .date-time-input {
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    width: 34.9rem;
    margin: 0.8rem 0 0 0;
  }

  .start-time-input {
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    width: 34.9rem;
    margin: 0.8rem 0 2.4rem 0;
  }

  .end-date {
    margin-bottom: 0.5rem;
  }

  .error-date {
    position: relative;
    top: 2.4rem;
  }

  .error-time {
    margin-top: 2.4rem;
  }

  /* .input-container {
    margin-bottom: 2rem;
  } */
`;
