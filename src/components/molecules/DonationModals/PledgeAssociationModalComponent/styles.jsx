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

  .dropdown-contact {
    width: 100%;
    margin-bottom: 2.4rem;
    border: 1px solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
  }
  .back-btn {
    width: 10.7rem;
    height: 5.1rem;
    border: 1px solid ${COLORS['moore-grey']};
    background-color: ${COLORS.white};
    border-radius: 0.5rem;
    color: ${COLORS['moore-grey']};
    margin-right: 1.6rem;
  }
  .save-btn {
    width: 14rem;
    height: 5.1rem;
    border-radius: 0.5rem;
  }

  .installment-btn {
    &__add {
      background-color: ${COLORS.torquoise};
      color: ${COLORS['gray-500']};
      border-radius: 0.5rem;
      margin-bottom: 0.8rem;
      width: 31.2rem;
      height: 6.4rem;
    }
    &__calculate {
      background-color: ${COLORS.torquoise};
      color: ${COLORS['gray-500']};
      border-radius: 0.5rem;
      margin-bottom: 0.8rem;
      width: 15.7rem;
      height: 6.4rem;
    }
    &__pink {
      background-color: ${COLORS.pink};
      color: ${COLORS.white};
      border-radius: 0.5rem;
      margin-bottom: 0.8rem;
      width: 31.2rem;
      height: 6.4rem;
    }
  }

  .calculate-installment {
    display: flex;
    gap: 1.6rem;
    margin-bottom: 2.4rem;
  }

  .dropdown-installment {
    width: 13.9rem;
    height: 6.4rem;
    padding: 2.2rem;
  }

  .installments {
    display: flex;
    gap: 1.6rem;
    align-items: center;

    .input-container {
      width: fit-content;
    }
    .installments-date {
      background-color: ${COLORS.white};
      color: ${COLORS['grey-400']};
      padding-left: 2.083rem;
      margin-bottom: 0.8rem;
      border: 1px solid ${COLORS['gray-500']};
      border-radius: 0.5rem;
      width: 23.9rem;
      height: 6.4rem;
    }
    .installments-amount {
      background-color: ${COLORS.white};
      color: ${COLORS['grey-400']};
      padding-left: 2.083rem;
      margin-bottom: 0.8rem;
      border: 1px solid ${COLORS['gray-500']};
      border-radius: 0.5rem;
      width: 13.3rem;
      height: 6.4rem;
    }
    .icon-delete {
      width: 1.8rem;
      height: 1.95rem;
      fill: ${COLORS['grey-400']};
    }
  }

  .pledge-modal {
    background-color: ${COLORS.white};
    padding-left: 2.083rem;
    margin-bottom: 0.8rem;
    height: 6.4rem;
    width: 100%;
    border: 1px solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
  }
  .modal-inputs {
    background-color: white;
    padding-left: 2.083rem;
    height: 6.4rem;
    width: 100%;
    border: 1px solid ${COLORS['moore-grey']};
    border-radius: 0.5rem;
    margin-bottom: 0.8rem;
  }
  .img-preview {
    width: 12.6rem;
    height: 6.4rem;
    border-radius: 0.5rem;
  }
`;

export const ModalInputDescription = styled.textarea`
  padding-left: 2.083rem;
  padding-top: 2.3rem;
  margin-bottom: 0.8rem;
  height: 11.8rem;
  resize: none;
  outline: none;
  width: 100%;
  border: 1px solid ${COLORS['gray-500']};
  border-radius: 0.5rem;
`;

export const InstallmentWrapper = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: right;
`;
