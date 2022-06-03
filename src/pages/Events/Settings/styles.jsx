import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const SettingsWrapper = styled(Card)`
  padding: 3.2rem 3.2rem 3.2rem 2.4rem;
  margin-top: 1.6rem;
`;

export const SettingsHeader = styled.div`
  display: flex;
  gap: 2.2rem;
  .icon {
    margin-top: 1.5rem;
  }

  .heading {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.xxxlarge};
    color: ${COLORS.black};
    cursor: pointer;
  }
`;

export const SwitchHeaderWrapper = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: 3rem;
  .form-heading {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.xxlarge};
    color: ${COLORS.black};
  }

  .switch {
    margin-top: 0.7rem !important;
  }
`;

export const SettingsMessage = styled.div`
  margin-bottom: 3rem;
  .message {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS.black};
    margin-top: 2.3rem;
  }
`;

export const SettingsContainer = styled.form`
  margin-left: 3.1rem;
  .input-container {
    display: flex;
    /* gap: 9.5rem; */
    justify-content: space-between;
  }
`;

export const Label = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['grey-200']};
  padding-bottom: 0.8rem;
`;

export const LeftInputs = styled.div`
  display: flex;
  flex-direction: column;
  .left-input {
    width: 52.5rem;
    height: 6.4rem;
    padding: 0 2.083rem 0 2.083rem;
    color: ${COLORS['grey-400']};
    border-radius: 0.5rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 2.4rem;
    background-color: ${COLORS.white};
  }

  .info {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    color: ${COLORS['gray-500']};
    margin-top: 1.6rem;
    position: relative;
    bottom: 3rem;
  }
`;

export const RightInputs = styled.div`
  display: flex;
  flex-direction: column;
  .right-input {
    height: 6.4rem;
    padding: 0 2.083rem 0 2.083rem;
    color: ${COLORS['grey-400']};
    border-radius: 0.5rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    margin-bottom: 2.4rem;
    background-color: ${COLORS.white};
    width: 36.4rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
  .cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.3rem;
  }

  .save-btn {
    width: 20.3rem;
    height: 5.1rem;
    border-radius: 0.3rem;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.medium};
  position: relative;
  bottom: 1.6rem;
`;
