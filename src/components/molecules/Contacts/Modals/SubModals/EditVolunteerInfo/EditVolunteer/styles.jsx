import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const VolunteerEditWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.4rem 0 6.2rem 0;
`;

export const ModalForm = styled.form``;

export const Label = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['gray-500']};
  position: relative;
  bottom: 0.9rem;
`;

export const ErrorMsg = styled.p`
  color: red;
  margin-bottom: 0.5rem;
  font-size: ${FONTSIZES.small};
  font-weight: ${FONTWEIGHTS.medium};
  margin-top: 0.8rem;
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
