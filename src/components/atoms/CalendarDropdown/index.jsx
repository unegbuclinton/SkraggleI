import DateRange from 'components/molecules/DateRange';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconChevronDown } from 'icons';
import React from 'react';
import styled from 'styled-components';

const CalendarDropdown = ({ label, open, toggleRange, setRange }) => {
  return (
    <CalendarDropdownContainer>
      <CalendarDropdownWrapper onClick={toggleRange}>
        <span>{label}</span>
        <DPIconChevronDown />
      </CalendarDropdownWrapper>
      <DateRange
        open={open}
        toggle={toggleRange}
        className="range-picker"
        onChangeRange={setRange}
      />
    </CalendarDropdownContainer>
  );
};

export default CalendarDropdown;
const CalendarDropdownContainer = styled.div`
  position: relative;
  cursor: pointer;
  max-width: 14.4rem;
  width: 100%;
  .range-picker {
    position: absolute;
    right: 0;
  }
`;

const CalendarDropdownWrapper = styled.span`
  color: ${COLORS['grey-400']};
  font-size: ${FONTSIZES.small};
  border: 1px solid ${COLORS.torquoise};
  font-weight: ${FONTWEIGHTS.normal};
  padding: 1.6rem;
  padding-right: 1.334rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
