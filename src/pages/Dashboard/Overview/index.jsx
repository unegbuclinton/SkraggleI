/* eslint-disable no-unused-vars */
import { getActivities } from 'api/donation/fundraisingActivities';
import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import DropdownComponent from 'components/atoms/Dropdown';
import Modal from 'components/layouts/Modal';
import DateRange from 'components/molecules/DateRange';
import DonationButton from 'components/molecules/iFrameComp/DonationButton';
import dayjs from 'dayjs';
import { getAdminData } from 'features/auth/authSlice';
import { getAllCampaigns } from 'features/campaign/campaignSlice';
import {
  allHouseHold,
  getAllCompanies,
  getAllTodos,
  viewContact,
  viewTags
} from 'features/contact/contactSlice';
import {
  donationHistory,
  fundActivities,
  getOneTimeTransaction,
  getPledge,
  getRecurringTransaction,
  revenueGoal,
  revenueHistory
} from 'features/donation/donationSlice';
import { getAllElements } from 'features/elements/elementsSlice';
import { getAllEvents } from 'features/events/eventSlice';
import { getAllForm } from 'features/forms/formsSlice';
import { allSubscriptionStatus, listAllMailBlast } from 'features/mailblast/mailBlastSlice';
import { viewP2P } from 'features/p2p/p2pSlice';
import { DPIconDateArrow, DPIconRangeIcon } from 'icons';
import WidgetModal from 'pages/Dashboard/modals/WidgetModal';
import Test from 'pages/Test';
import React, { useEffect, useState } from 'react';
import { renderToString } from 'react-dom/server';
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
  //   dispatch(getAllEvents());
  //   dispatch(getPledge());
  //   dispatch(allHouseHold());
  //   dispatch(viewTags());
  //   dispatch(viewContact());
  //   dispatch(viewP2P());
  //   dispatch(getAllCampaigns());
  //   dispatch(getAllForm());
  //   dispatch(getAllElements());
  //   dispatch(getAdminData());
  //   dispatch(getAdminData());
  // }, []);

  // useEffect(() => {
  // }, []);

  useEffect(() => {
    dispatch(listAllMailBlast());
    dispatch(allSubscriptionStatus());
    dispatch(getOneTimeTransaction());
    dispatch(getRecurringTransaction());
    dispatch(fundActivities());
    dispatch(revenueGoal());
    dispatch(donationHistory());
    dispatch(revenueHistory());
  }, []);
  const html = renderToString(<Test />);

  console.log(html);
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
