import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

export const ModalWrapper = styled.form`
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
    color: #626262;
  }

  .copy {
    &__textarea {
      display: flex;
      position: relative;
      width: 100%;
      border: 1px solid #ff576b;
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
  height: 4.7rem;
  resize: none;
  border-radius: 0.5rem;
  border: none;
  padding-left: 1.8rem;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  font-size: 1.47038rem;
  color: ${COLORS["gray-500"]};
`;

export const ModalInput = styled.input``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: right;
`;
