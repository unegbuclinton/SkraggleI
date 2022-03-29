import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

export const ModalWrapper = styled.form`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.8rem;
  padding-bottom: 2.92rem;

  h1 {
    margin-top: 1.6rem;
    margin-bottom: 0.5rem;
    font-size: ${FONTSIZES.small};
    line-height: 152.69%;
    color: #626262;
  }

  .dropdown-followers {
    width: 100%;
    margin-bottom: 13.9rem;
  }
  .cancel-btn {
    width: 14rem;
    height: 4.8rem;
    border: 1px solid #9a9aa9;
    background-color: ${COLORS.white};
    border-radius: 0.5rem;
    color: #9A9AA9;
    margin-right: 1.6rem;
  }
  .save-btn {
    width: 14rem;
    height: 4.8rem;
    border: 1px solid #9a9aa9;
    border-radius: 0.5rem;
  }
`;

export const ModalInput = styled.input`
  padding-left: 2.083rem;
  height: 6.4rem;
  width: 100%;
  border: 1px solid ${COLORS["gray-500"]};
  border-radius: 0.5rem;
`;

export const ModalInputDescription = styled.input`
  padding-left: 2.083rem;
  padding-top: 0;
  height: 17.3rem;
  width: 100%;
  border: 1px solid ${COLORS["gray-500"]};
  border-radius: 0.5rem;
`;

export const ButtonsContainer =  styled.div`
display: flex;
justify-content: right;
`