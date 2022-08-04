import { COLORS } from 'constants/colors';
import { FONTSIZES } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';
function ActionDropdown({ setOpen }) {
  return (
    <ActionWrapper>
      <ActionContentWrapper>
        <ActionContainer onClick={() => setOpen(true)}>
          <Action>Donation</Action>
        </ActionContainer>
        <ActionContainer onClick={() => setOpen(true)}>
          <Action>Recurring</Action>
        </ActionContainer>
      </ActionContentWrapper>
    </ActionWrapper>
  );
}

export default ActionDropdown;

const ActionWrapper = styled.div`
  text-align: center;
  position: absolute;
  width: 15rem;
  background-color: ${COLORS.white};
  z-index: 1;
  top: 5rem;
  box-shadow: -0.5rem 0.5rem 0.5rem rgb(0 0 0 / 8%);
  .delete-icon {
    fill: ${COLORS.black};
  }
`;

const ActionContentWrapper = styled.div``;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem;
  &:hover {
    background-color: ${COLORS['garage-mix-grey']};
  }
`;

export const Action = styled.p`
  font-size: ${FONTSIZES.small};
  cursor: pointer;
`;
