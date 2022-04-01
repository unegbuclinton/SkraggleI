import { COLORS } from "constants/colors";
import { FONTWEIGHTS } from "constants/font-spec";
import { FONTSIZES } from "constants/font-spec";
import styled from "styled-components";

export const WarningWrapper = styled.div`
  height: 100%;

  .warning-card {
    width: 60.7rem;
    background-color: red;
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
    }
  }
`;

export const UnsubscribeOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .unsub-option {
    display: flex;
    gap: 0.778rem;
  }
  span {
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
  }
`;

export const UnsubscribeField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .unsub-option {
    display: flex;
    gap: 0.778rem;
  }
  span {
    font-size: ${FONTSIZES.small};
    font-weight: ${FONTWEIGHTS.normal};
  }
`;
