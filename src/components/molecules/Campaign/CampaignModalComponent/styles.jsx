import styled from 'styled-components';
import { COLORS } from 'constants/colors';
import { FONTSIZES } from 'constants/font-spec';

export const ModalWrapper = styled.form`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.6rem;
  padding-bottom: 2.92rem;

  h1 {
    margin-top: 1.6rem;
    margin-bottom: 0.5rem;
    font-size: ${FONTSIZES.small};
    line-height: 152.69%;
    color: ${COLORS['grey-200']};
  }

  .dropdown-followers {
    width: 100%;
    margin-bottom: 13.9rem;
    border: 1px solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
  }
  .cancel-btn {
    width: 14rem;
    height: 4.8rem;
    border: 1px solid ${COLORS['moore-grey']};
    background-color: ${COLORS.white};
    border-radius: 0.5rem;
    color: ${COLORS['moore-grey']};
    margin-right: 1.6rem;
  }
  .save-btn {
    width: 14rem;
    height: 4.8rem;
    border-radius: 0.5rem;
  }

  .campaign-modal {
    background-color: ${COLORS.white};
    padding-left: 2.083rem;
    margin-bottom: 0.8rem;
    height: 6.4rem;
    width: 100%;
    border: 1px solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
  }
`;

export const ModalInput = styled.input``;

export const ModalInputDescription = styled.textarea`
  padding-left: 2.083rem;
  padding-top: 2.3rem;
  margin-bottom: 0.8rem;
  height: 17.3rem;
  resize: none;
  outline: none;
  width: 100%;
  border: 1px solid ${COLORS['gray-500']};
  border-radius: 0.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: right;
`;
