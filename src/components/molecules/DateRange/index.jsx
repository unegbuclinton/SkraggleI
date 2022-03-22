import { COLORS } from 'constants/colors';
import { FONTSIZES } from 'constants/font-spec';
import { DateRangePicker } from 'materialui-daterange-picker';
import React from 'react';
import styled from 'styled-components';
import ranges from './ranges';
import './styles';

const DateRange = ({onChangeRange}) => {
  const [open, setOpen] = React.useState(true);
  const [dateRange, setDateRange] = React.useState({});

  console.log('dateRange', dateRange);

  const toggle = () => setOpen(!open);
  return (
    <DateRangeWrapper>
      <DateRangePicker
        open={open}
        toggle={toggle}
        onChange={onChangeRange}
        definedRanges={ranges}
      />
    </DateRangeWrapper>
  );
};

export default DateRange;

const DateRangeWrapper = styled.div`
  .materialui-daterange-picker-makeStyles-dateRangePickerContainer-1 {
    width: fit-content;
  }
  .materialui-daterange-picker-MuiListItem-root-261 {
    padding: 0;
  }
  .materialui-daterange-picker-MuiListItemText-root-272 {
    margin: 0;
  }
  .materialui-daterange-picker-MuiList-padding-258 {
    padding: 0;
    margin-top: 1.879rem;
    margin-top: 5.637rem;
    margin-top: 3.758rem;
    display: flex;
    flex-direction: column;
    row-gap: 1.073rem;
  }
  .materialui-daterange-picker-MuiButtonBase-root-198 {
    color: ${COLORS['header-grey']};
  }
  .materialui-daterange-picker-MuiGrid-container-36 {
    width: fit-content;
  }
  .materialui-daterange-picker-makeStyles-weekDaysContainer-185 {
    width: 100%;
  }
  .materialui-daterange-picker-MuiGrid-align-items-xs-center-44 {
    margin: 0 auto;
  }

  .materialui-daterange-picker-MuiSelect-select-202.materialui-daterange-picker-MuiSelect-select-202{
    padding-right: 0.5rem;
  }
    .materialui-daterange-picker-MuiInput-underline-217:before {
    border: none;
  }
  .materialui-daterange-picker-MuiSelect-icon-207 {
    display: none;
  }
  .materialui-daterange-picker-makeStyles-header-4 {
    display: none;
  }
  .materialui-daterange-picker-MuiTypography-body2-139 {
    font-size: ${FONTSIZES.xsmall};
  }
  .materialui-daterange-picker-MuiTypography-caption-141 {
    font-size: ${FONTSIZES.xsmall};
  }
  .materialui-daterange-picker-MuiTypography-colorTextSecondary-164 {
    color: ${COLORS['disabled-grey']};
  }

  .materialui-daterange-picker-makeStyles-outlined-253 {
    border-color: ${COLORS.pink};
    border-radius: 0;
  }
  .materialui-daterange-picker-MuiIconButton-root-189 {
    border-radius: 0;
  }
  .materialui-daterange-picker-makeStyles-highlighted-255 {
    background-color: ${COLORS['date-highlight-bg']};
  }
  .materialui-daterange-picker-makeStyles-filled-254 {
    background-color: ${COLORS.pink};

    &:hover {
      background-color: ${COLORS.pink};
    }
  }

  .materialui-daterange-picker-MuiInput-underline-217 {
    &:after {
      border-bottom: 0;
    }
  }

  .materialui-daterange-picker-MuiIconButton-root-189.materialui-daterange-picker-MuiIconButton-disabled-195 {
    color: ${COLORS['disabled-grey']};
    font-size: ${FONTSIZES.xsmall};
    color: red;
  }
  .materialui-daterange-picker-MuiTypography-caption-141 {
    color: ${COLORS['header-grey']};
  }

  .materialui-daterange-picker-makeStyles-divider-6 {
    display: none;
  }

  .materialui-daterange-picker-MuiPaper-elevation5-15 {
    box-shadow: 4px 5px 19px rgba(0, 0, 0, 0.1);
  }

  .materialui-daterange-picker-MuiDivider-root-177 {
    display: none;
  }

  .materialui-daterange-picker-MuiGrid-root-35 {
  }

  .materialui-daterange-picker-MuiPaper-elevation5-15 {
    padding: 4.3rem 3.1rem 5.315rem;
  }
`;
