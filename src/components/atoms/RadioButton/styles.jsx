import { COLORS } from 'constants/colors';
import { DPIconSkraggleCheck } from 'icons';
import styled from 'styled-components';

export const RadioContainer = styled.label`
  display: inline;
  vertical-align: middle;
  width: fit-content;
  /* border-radius: 50%; */
  /* border: 1px solid ${COLORS.torquoise}; */
`;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: circle(0, 0, 0, 0);
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

export const StyledRadio = styled.div`
  display: inline-flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border: 1px solid ${({ checked }) => (checked ? '#00913A' : '#E6EFF1')};
  border-radius: 50%;
  transition: all 150ms;

  ${CheckIcon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;
