import { COLORS } from "constants/colors";
import { FONTWEIGHTS, FONTSIZES } from "constants/font-spec";
import styled from "styled-components";

export const WarningWrapper = styled.div`
  height: 100%;

  .warning-card {
    width: 60.7rem;
    margin: auto;

    .warning-header {
      text-align: center;
      color: ${COLORS.deepPurple};
      font-size: ${FONTSIZES.xxlarge};
      font-weight: ${FONTWEIGHTS.medium};
      margin-bottom: 3.2rem;
    }
    .warning-text {
      text-align: center;
      color: ${COLORS["grey-400"]};
      font-size: ${FONTSIZES.lg};
      font-weight: ${FONTWEIGHTS.normal};
      margin-bottom: 4.5rem;
    }
  }

  .unsubscription-footer {
    display: flex;
    justify-content: flex-end;
    gap: 1.6rem;

    &__back {
      width: 10.7rem;
      height: 5.1rem;
    }
    &__confirm {
      width: 20.5rem;
      height: 5.1rem;
    }
  }
`;

export const UnsubscribeOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 3.322rem;

  .unsub-option {
    display: flex;
    gap: 0.778rem;
  }
  span {
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
  }

  .radio-class{
    width : 30rem;
  }
`;

export const UnsubscribeField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 4.833rem;

  .unsub-option {
    display: flex;
    gap: 0.778rem;
  }
  span {
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
  }

  .feedback-text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.normal};
    color: ${COLORS["grey-500"]};
  }
  #feeback-field {
    border: 1px solid ${COLORS["gray-500"]};
    outline: none;
    width: 100%;
    height: 16.5rem;
    color: ${COLORS["grey-400"]};
    padding: 1.5rem 1.7rem 1.1rem 1.5rem;
  }
`;
