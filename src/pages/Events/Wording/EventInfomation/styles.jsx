import Card from "components/atoms/Card";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const WordingWrapper = styled(Card)`
  padding: 3.2rem 2.4rem 0 2.4rem;
`;

export const WordingHeader = styled.div`
  .heading {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.xxxlarge};
    color: ${COLORS.black};
  }
`;

export const ContentHeading = styled.div`
  background-color: ${COLORS.torquoise};
  padding: 2.433rem 0 2.267rem 5rem;
  display: flex;
  gap: 56.4rem;
  margin-top: 2.4rem;
  .content {
    color: ${COLORS["grey-300"]};
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.xsmall};
  }
`;

export const WordingContainer = styled.div`
  border: 0.08rem solid ${COLORS["porcelain-white"]};
  display: flex;
  gap: 53rem;
  padding: 2.5rem 0 2.3rem 5rem;
  .right-word {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.xsmall};
    color: ${COLORS["gray-500"]};
  }

  .left-word {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    color: ${COLORS["grey-500"]};
  }
`;

export const EventFormContainer = styled.div`
  border: 0.08rem solid ${COLORS["porcelain-white"]};
  display: flex;
  gap: 53rem;
  padding: 2.5rem 0 2.3rem 5rem;
  .left-word {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    color: ${COLORS["grey-500"]};
    white-space: nowrap;
  }
  overflow-x: auto;
`;

export const InputField = styled.input`
  width: 20.9rem;
  height: 2.9rem;
  background-color: ${COLORS.white};
  border: 0.1rem ${COLORS["gray-500"]} solid;
  border-radius: 0.5rem;
  outline: none;
  padding: 1rem;
`;

export const Container = styled.form`
  display: flex;
  gap: 3.2rem;

  .button-container {
    display: flex;
    gap: 1.6rem;
    .btn-save {
      width: 5.5rem;
      height: 2.9rem;
      border-radius: 0.5rem;
      font-weight: ${FONTWEIGHTS.medium};
      font-size: ${FONTSIZES.xsmall};
      color: ${COLORS.white};
      padding: 0;
    }

    .btn-cancel {
      background-color: ${COLORS.white};
      width: 5.6rem;
      height: 2.9rem;
      border: 0.1rem solid ${COLORS["gray-500"]};
      border-radius: 0.5rem;
      color: ${COLORS["grey-400"]};
      font-size: ${FONTSIZES.xsmall};
      font-weight: ${FONTWEIGHTS.medium};
      padding: 0;
      margin-right: 6.7rem;
    }
  }
`;
