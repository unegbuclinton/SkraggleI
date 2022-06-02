import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const VolunteerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.2rem 0 2.42rem 0;
`;

export const VolunteerForm = styled.form`
  .input-field {
    width: 60.2rem;
    border-radius: 0.5rem;
    outline: none;
    border: 0.1rem solid ${COLORS['gray-500']};
    padding-left: 2rem;
    background-color: ${COLORS.white};
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const VolunteerLabel = styled.label`
  padding: 1rem 0 0.5rem 0;
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-200']};
  position: relative;
  bottom: 0.5rem;
`;

export const ErrorMsg = styled.p`
  color: red;
  margin-top: -0.5em;
  position: relative;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.medium};
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 4rem;
  gap: 1.6rem;
  .cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.3rem;
    background-color: ${COLORS.white};
    font-weight: ${FONTWEIGHTS.xbold};
    font-size: ${FONTSIZES.small};
    color: ${COLORS['gray-500']};
  }
  .save-btn {
    width: 20.5rem;
    height: 5.1rem;
    background-color: ${COLORS.pink};
    border-radius: 0.3rem;
    font-weight: ${FONTWEIGHTS.xbold};
    font-size: ${FONTSIZES.small};
    color: ${COLORS.white};
  }
`;
