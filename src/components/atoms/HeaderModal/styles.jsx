import { COLORS } from "constants/colors";
import { FONTWEIGHTS } from "constants/font-spec";
import { FONTSIZES } from "constants/font-spec";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 7.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.deepPurple};

  .header-text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.bold};
    color: ${COLORS.white};
  }
`;
