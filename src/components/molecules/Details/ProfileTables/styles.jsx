import Card from "components/atoms/Card";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const TableWrapper = styled(Card)`
  padding: 1.6rem 2.4rem;
`;

export const TableHeading = styled.div`
  border-bottom: 0.1rem solid ${COLORS.torquoise};
  padding-bottom: 1.7rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  .heading {
    color: ${COLORS["header-grey"]};
    font-size: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.lg};
  }
`;
