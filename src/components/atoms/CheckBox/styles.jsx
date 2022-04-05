import { DPIconSkraggleCheck } from 'icons';
import styled from 'styled-components';

export const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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
  width: 18px;
  height: 18px;
  border: 2px solid ${({ checked }) => (checked ? '#00913A' : '#E6EFF1')};
  border-radius: 5px;
  transition: all 150ms;

  ${CheckIcon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;
