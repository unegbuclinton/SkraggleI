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
  .billing-heading {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.xxxlarge};
    color: ${COLORS.black};
    padding-top: 2.4rem;
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
  gap: 49.5rem;
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

  .text {
    margin-left: 3.3rem;
  }
`;
