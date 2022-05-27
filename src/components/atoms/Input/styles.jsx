import { COLORS } from 'constants/colors';
import styled, { css } from 'styled-components';

export const InputField = styled.input`
  outline: none;
  border: none;
  width: ${({ autoWidth }) => (autoWidth ? '100%' : '37.52rem')};
  height: 4.4rem;
  border-radius: 5px;
  background-color: ${COLORS.offWhite};
  color: ${COLORS['grey-400']};
  padding: 20px;
  margin-bottom: 16px;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${COLORS.torquoise};
      color: ${COLORS['disabled-grey']};
    `};
`;

export const InputFieldIcon = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
`;
