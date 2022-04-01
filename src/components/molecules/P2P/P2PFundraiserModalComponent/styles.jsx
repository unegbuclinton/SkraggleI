import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

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
    color: ${COLORS["grey-200"]};
  }

  .modal-inputs {
    background-color: white;
    padding-left: 2.083rem;
    height: 6.4rem;
    width: 100%;
    border: 1px solid ${COLORS["gray-500"]};
    border-radius: 0.5rem;
  }

  .modal-inputs__goals {
      background-color: white;
      padding-left: 2.083rem;
      width: 30.1rem;
      height: 6.4rem;
      border: 1px solid ${COLORS["gray-500"]};
      border-radius: 0.5rem;
    }

  .select-goals {
    display: flex;
  }

  .dropdown {
    &__select-campaign {
      width: 100%;
      margin-bottom: 2.4rem;
      border-radius: 0.5rem;
      border: 1px solid ${COLORS["moore-grey"]};
      color: ${COLORS["moore-grey"]};
    }
    &__select-designation {
      width: 100%;
      margin-bottom: 2.4rem;
      border-radius: 0.5rem;
      border: 1px solid ${COLORS["moore-grey"]};
      color: ${COLORS["blue-black"]};
    }
    &__select-currency {
      width: 11.8rem;
      height: 6.4rem;
      margin-left: 2.4rem;
      border-radius: 0.5rem;
      border: 1px solid ${COLORS["moore-grey"]};
    }
  }
  .cancel-btn {
    width: 30.8rem;
    height: 5.1rem;
    border: 1px solid #9a9aa9;
    background-color: ${COLORS.white};
    border-radius: 0.5rem;
    color: #9a9aa9;
    margin-top: 1.6rem;
  }
  .save-btn {
    width: 30.8rem;
    height: 5.1rem;
    border-radius: 0.5rem;
    margin-top: 4rem;
  }

  .display-photos{
    display: flex;
    &__button{
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

