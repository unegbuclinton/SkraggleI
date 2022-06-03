import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const DeleteWrapper = styled.div`
  padding: 2rem;
`;

export const WarningWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${COLORS['error-background']};
  border: 0.1rem solid ${COLORS.pink};
  padding: 1rem 0 1rem 0;
`;

export const WarningText = styled.p`
  text-align: left;
  font-size: 1.6rem;
  font-weight: ${FONTWEIGHTS.medium};
  width: 40rem;
  color: ${COLORS['grey-400']};
  line-height: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
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
