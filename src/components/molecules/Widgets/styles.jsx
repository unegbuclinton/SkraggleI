import styled, { css } from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";

export const WidgetWrapper = styled.div`
  width: 65rem;
`;

export const WidgetContentWrapper = styled.div`
  display: flex;
  gap: 7.4rem;
  .btn-wrapper {
    display: flex;
    flex-direction: column;
    margin: 4.004rem 0 0 5.4rem;
  }
`;
export const WidgetButton = styled.button`
  position: relative;
  width: 10.3rem;
  height: 1.7rem;
  font-size: ${FONTSIZES.normal};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS["moore-grey"]};
  margin-bottom: 4.8rem;
  cursor: pointer;
  text-align: left;
  border: none;
  background: transparent;

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
