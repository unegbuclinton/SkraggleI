
import { COLORS } from "constants/colors";
import { FONTSIZES } from "constants/font-spec";
import { DPIconSkraggleCheck } from "icons";
import styled, { css } from "styled-components";

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;

  .label-text {
    font-size: ${FONTSIZES.small};
    margin-left: 0.778rem;
  }

  ${({ pink }) =>
    pink &&
    css`
      svg {
        path {
          fill: ${COLORS.pink};
        }
      }
      border-color: ${COLORS.pink};
    `};
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CheckIcon = styled(DPIconSkraggleCheck)``;

export const StyledCheckbox = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid ${({ checked,pink }) => (checked && pink ? '#FF576B' : checked ? "#00913A" : "#E6EFF1")};
  border-radius: 5px;
  transition: all 150ms;

  ${CheckIcon} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }

  ${({ radial }) =>
    radial &&
    css`
      border-radius: 50%;
    `};
`;
