import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import DropdownComponent from 'components/atoms/Dropdown';
import DateRange from 'components/molecules/DateRange';
import dayjs from 'dayjs';
import { allHouseHold, viewContact } from 'features/contact/contactSlice';
import { DPIconDateArrow, DPIconRangeIcon } from 'icons';
import WidgetModal from 'pages/Dashboard/modals/WidgetModal';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { datas1 } from 'utilities/overviewData';
import { DatePicker, OverviewLeft, OverviewRight, OverviewWrapper } from './styles';

function Overview() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('Filters');
  const [openWidget, setOpenWidget] = useState(false);

  const [filterRange, setFilterRange] = useState({
    startDate: new Date(),
    endDate: new Date()
  });
  const [datePick, setDatePick] = useState(false);
  const toogleDateRange = () => setDatePick((prev) => !prev);
  // useEffect(() => {
  //   dispatch(getAllCompanies());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(allHouseHold());
  }, []);

  // useEffect(() => {
  //   dispatch(viewTags());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(viewContact());
  }, []);
  return (
    <OverviewWrapper>
      <Card className="overview-card">
        <OverviewLeft>
          <p className="overview-heder__text">Overview</p>
          <div className="overview-action__buttons">
            <div className="range-picker" onClick={toogleDateRange}>
              <DatePicker>
                <DPIconRangeIcon />
              </DatePicker>
              <DatePicker>{dayjs(filterRange.startDate).format('MMM DD YYYY')}</DatePicker>
              <DatePicker>
                <DPIconDateArrow />
              </DatePicker>
              <DatePicker>{dayjs(filterRange.endDate).format('MMM DD YYYY')}</DatePicker>
            </div>

            <DropdownComponent selected={selected} setSelected={setSelected} data={datas1} />
            <DropdownComponent selected={selected} setSelected={setSelected} data={datas1} />
          </div>
          {datePick && (
            <DateRange
              open={datePick}
              toggle={toogleDateRange}
              className="date-range-picker"
              onChangeRange={(ranges) => {
                console.log(ranges);
                setFilterRange(ranges);
              }}
            />
          )}
        </OverviewLeft>
        <OverviewRight>
          <Button
            onClick={() => {
              setOpenWidget(true);
            }}
            className="overview-btn">
            Manage Widgets
          </Button>
          {openWidget && (
            <WidgetModal
              isShown={openWidget}
              onCloseWidget={() => {
                setOpenWidget(false);
              }}
            />
          )}
        </OverviewRight>
      </Card>
    </OverviewWrapper>
  );
}

export default Overview;
