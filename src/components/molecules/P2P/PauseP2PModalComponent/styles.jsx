import { COLORS } from 'constants/colors';
import { FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const ModalWrapper = styled.form`
  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .yes-button {
    width: 20.5rem;
    height: 5.1rem;
    font-weight: ${FONTWEIGHTS.xbold};
    font-size: 1.47038rem;
    background-color: ${COLORS.pink};
    color: ${COLORS.white};
    margin-top: 3.2rem;
    border-radius: 0.340356rem;
  }
  .no-button {
    width: 20.5rem;
    height: 5.1rem;
    font-weight: ${FONTWEIGHTS.xbold};
    font-size: 1.47038rem;
    background-color: ${COLORS.white};
    color: ${COLORS['gray-500']};
    border: 1px solid ${COLORS['gray-500']};
    margin-top: 2.4rem;
    border-radius: 0.340356rem;
    margin-bottom: 4.5rem;
  }
`;
