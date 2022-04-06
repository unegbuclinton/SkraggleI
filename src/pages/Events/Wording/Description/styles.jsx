import Card from "components/atoms/Card";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const WordingWrapper = styled(Card)`
  padding: 3.2rem 2.4rem 0 2.4rem;
  margin-top: 1.6rem;
  .description-table {
    .rdt_ {
      &TableRow {
        padding-left: 5rem;
      }
      &TableHeadRow {
        padding-left: 5rem;
        margin-bottom: 0;
        color: ${COLORS["grey-300"]};
        font-weight: ${FONTWEIGHTS.normal};
        font-size: ${FONTSIZES.xsmall};
      }
    }
  }
`;

export const WordingHeader = styled.div`
  .heading {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.xxxlarge};
    color: ${COLORS.black};
  }
`;
