import Button from 'components/atoms/Button/Button';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function AttendeeAction() {
  return (
    <ActionWrapper className="content-container">
      <Button className="drop-button" auth invert>
        Print Event Report
      </Button>
      <Button className="drop-button" auth invert>
        Send Email to Attendees
      </Button>
      <DropdownInfo>Download Ticket Holder List</DropdownInfo>
      <BtnContainer>
        <Button className="drop-button" auth invert>
          CSV
        </Button>
        <Button className="drop-button" auth invert>
          Excel
        </Button>
      </BtnContainer>
    </ActionWrapper>
  );
}

export default AttendeeAction;

const ActionWrapper = styled.div`
  position: absolute;
  padding: 2.2rem 1.8rem;
  text-align: left;
  height: 26.3rem;
  width: 31.1rem;
  background-color: ${COLORS.white};
  z-index: 1;
  top: 5rem;
  right: -1rem;
  box-shadow: -0.5rem 0.5rem 0.5rem rgb(0 0 0 / 8%);
  .drop-button {
    border: 0.1rem solid ${COLORS['garage-mix-grey']};
    margin-bottom: 0.8rem;
    border-radius: 0;
    font-weight: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.small};
    color: ${COLORS['grey-400']};
    height: 5.6rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const DropdownInfo = styled.p`
  font-weight: ${FONTWEIGHTS.normal};
  font-size: ${FONTSIZES.small};
  color: ${COLORS['header-grey']};
  margin-top: 1.52rem;
`;
