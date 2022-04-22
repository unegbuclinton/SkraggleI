import Card from "components/atoms/Card";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import styled from "styled-components";

export const ActiveInactiveWrapper = styled(Card)`
  padding: 3.1rem 2.4rem 63rem 2.4rem;
  margin-top: 1.6rem;
`;

export const Container = styled.div`
  .events-table {
    .rdt_ {
      &TableRow {
        padding-left: 5.8rem;
        font-weight: ${FONTWEIGHTS.normal};
        font-size: ${FONTSIZES.lg};
        color: ${COLORS["grey-500"]};
        white-space: nowrap;
      }
      &TableHeadRow {
        display: none;
      }
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 2rem 1.2rem 5.8rem;
  cursor: pointer;
`;

export const ContentsWrapper = styled.div`
  text-align: center;
  margin-right: 12.1rem;
  padding-left: 5.8rem;
  .heading {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS["grey-500"]};
    white-space: nowrap;
  }
`;

export const SwitchIconWrapper = styled.div`
  display: flex;
  gap: 2.57rem;
  margin-right: 6.375rem;
`;

export const DateWrapper = styled.div`
  margin-right: 9.5rem;
  text-align: justify;
  .title {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS["gray-500"]};
  }

  .date {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS["grey-400"]};
  }
`;

export const ViewWrapper = styled.div`
  margin-right: 8.4rem;
  text-align: justify;
  .title {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS["gray-500"]};
  }

  .view {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS["grey-400"]};
    white-space: nowrap;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  .action {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS["grey-500"]};
    cursor: pointer;
  }

  .delete {
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.lg};
    color: ${COLORS.pink};
    cursor: pointer;
  }
`;
