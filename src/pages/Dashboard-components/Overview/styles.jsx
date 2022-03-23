import { COLORS } from "constants/colors";
import { FONTWEIGHTS, FONTSIZES } from "constants/font-spec";
import styled from "styled-components";

export const OverviewWrapper = styled.div`
  .overview-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.6rem;
    padding: 1.64rem 1.6rem 1.56rem 4rem;
  }
  .overview-heder__text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS["header-grey"]};
  }
`;

export const OverviewLeft = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5.5rem;

  .overview-action__buttons {
    position: relative;
    display: flex;
    gap: 1.6rem;
  }
  .range-picker {
    width: 24.4rem;
    height: 4.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 1.4rem 2.1rem 1.4rem 1.8rem;
    gap: 1rem;
    border: 1px solid ${COLORS["porcelain-white"]};
  }

  .date-range-picker {
    position: absolute;
    top: 5rem;
    left: 13rem;
  }
`;
export const OverviewRight = styled.div`
  .overview-btn {
    height: 4.8rem;
    width: 15.5rem;
  }
`;

export const DatePicker = styled.span`
  font-size: ${FONTSIZES.xsmall};
  color: ${COLORS["grey-100"]};
`;
