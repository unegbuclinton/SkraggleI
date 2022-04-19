import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const DetailLabel = styled.label`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS["grey-200"]};
`;

export const DetailsText = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS.black};
`;

export const SwitchWrapper = styled.div`
  display: flex;
  gap: 3.2rem;
`;

export const SwitchLabel = styled.div`
  width: 27.1rem;
  height: 2.1rem;
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.lg};
  color: ${COLORS.black};
`;

export const SectionWrapper = styled.div`
  width: 95%;
  /* padding: 2.5rem 3rem 0 0; */
  margin: auto;
  .recipient-container {
    margin-top: 2.2rem;
  }

  .recipient-body {
    width: 100%;
    height: 30.6rem;
    border: 0.1rem solid #9a9aa9;
    box-sizing: border-box;
    border-radius: 0.5rem;
    margin: 0.8rem 0 0;
  }

  .recipient-text {
    font-size: ${FONTSIZES.small};
    padding-left: 1.2rem;
    margin: 1.9rem 0 3.2rem 0;
  }
`;
