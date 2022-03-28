import styled, { css } from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

export const WidgetWrapper = styled.div`
  width: 65rem;

  .widget-content-wrapper {
    display: flex;
    gap: 7.9rem;
    border-bottom: 0.1rem solid ${COLORS.torquoise};
  }
  .widget-tab-container {
    display: flex;
    flex-direction: column;
    padding: 3.9rem 0 3.7rem 3.2rem;
  }

  .component-card {
    width: 10.3rem;
    height: 1.7rem;
    font-size: ${FONTSIZES.normal};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS["moore-grey"]};
    margin-bottom: 4.8rem;
    cursor: pointer;
    text-align: left;

    &::after {
      display: none;
    }

    ${({ active }) =>
      active &&
      css`
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: -1.9rem;
          width: 1.1rem;
          height: 1.1rem;
          border-radius: 50%;
          background-color: ${COLORS.pink};
        }
      `};
  }
`;

export const WidgetBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 2.4rem;
  margin-top: 1.1rem;

  .btn-wrapper {
    width: 14rem;
    margin-bottom: 2.4rem;
  }
  .widget-btn {
    height: 4.8rem;
  }
`;
