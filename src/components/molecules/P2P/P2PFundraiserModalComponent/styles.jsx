import Button from 'components/atoms/Button/Button';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import styled from 'styled-components';

export const ModalWrapper = styled.form`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.8rem;
  padding-bottom: 2.92rem;

  h1 {
    margin-top: 2.4rem;
    margin-bottom: 0.8rem;
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    line-height: 152.69%;
    color: ${COLORS['grey-200']};
  }

  .text-area {
    resize: none;
    width: 100%;
    height: 14.4rem;
    outline: none;
    padding: 2.4rem;
    border: 1px solid ${COLORS['gray-500']};
  }

  .modal-inputs {
    background-color: white;
    padding-left: 2.083rem;
    width: 100%;
    border: 1px solid ${COLORS['moore-grey']};
    border-radius: 0.5rem;
  }

  .modal-inputs__goals {
    background-color: white;
    padding-left: 2.083rem;
    width: 30.1rem;
    border: 1px solid ${COLORS['moore-grey']};
    border-radius: 0.5rem;
  }

  .modal-inputs__container-input {
    width: 30.1rem;
  }

  .select-goals {
    display: flex;
  }

  .dropdown {
    &__select-campaign {
      width: 100%;
      margin-bottom: 2.4rem;
      border-radius: 0.5rem;
      border: 1px solid ${COLORS['moore-grey']};
      color: ${COLORS['moore-grey']};
    }
    &__select-designation {
      width: 100%;
      margin-bottom: 2.4rem;
      border-radius: 0.5rem;
      border: 1px solid ${COLORS['moore-grey']};
      color: ${COLORS['blue-black']};
    }
    &__select-currency {
      /* padding-top: 2.3rem; */
      /* color: ${COLORS['moore-grey']}; */
      width: 11.8rem;
      height: 6.4rem;
      margin-left: 2.4rem;
      /* border-radius: 0.5rem;
      border: 1px solid ${COLORS['moore-grey']};
      align-items: center; */
    }
  }
  .cancel-btn {
    width: 30.8rem;
    height: 5.1rem;
    border: 1px solid ${COLORS['moore-grey']};
    background-color: ${COLORS.white};
    border-radius: 0.5rem;
    color: ${COLORS['moore-grey']};
    margin-top: 1.6rem;
  }
  .save-btn {
    width: 30.8rem;
    height: 5.1rem;
    border-radius: 0.5rem;
    margin-top: 4rem;
  }

  .display-photos {
    display: flex;
    &__button {
      width: 8.1rem;
      height: 8.1rem;
      margin-right: 1.6rem;
    }
  }

  .img-preview {
    &__profile {
      width: 12.6rem;
      height: 8.1rem;
      border-radius: 0.5rem;
    }
    &__display {
      width: 8.1rem;
      height: 8.1rem;
      margin-right: 1.6rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SecondModalWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.8rem;
  padding-bottom: 2.92rem;
  h1 {
    text-align: center;
    margin-top: 1.6rem;
    margin-bottom: 0.5rem;
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    line-height: 152.69%;
    color: ${COLORS['grey-200']};
  }

  .copy {
    &__textarea {
      display: flex;
      position: relative;
      width: 46.6rem;
      border: 1px solid ${COLORS.pink};
      border-radius: 0.5rem;
    }
    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.9rem;
      position: absolute;
      width: 9.7rem;
      height: 4.7rem;
      border-radius: 0px 5px 5px 0px;
      right: 0;
      bottom: 0;
    }
  }
`;

export const CopyText = styled.textarea`
  width: 100%;
  outline: none;
  height: 4.6rem;
  resize: none;
  border-radius: 0.5rem;
  border: none;
  padding-left: 1.8rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  font-size: 1.47038rem;
  color: ${COLORS['moore-grey']};
`;

export const SecondButtonsContainer = styled.div`
  display: flex;
  justify-content: right;
`;

export const ButtonCopy = styled(Button)`
  gap: 0.9rem;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 9.7rem;
  height: 4.7rem;
  border-radius: 0px 5px 5px 0px;
  right: 0;
  bottom: 0;
`;
