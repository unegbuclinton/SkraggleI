/* eslint-disable no-unused-vars */
import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import {
  donationHistory,
  fundActivities,
  getOneTimeTransaction,
  getRecurringTransaction,
  revenueGoal,
  revenueHistory
} from 'features/donation/donationSlice';
import { allSubscriptionStatus, listAllMailBlast } from 'features/mailblast/mailBlastSlice';
import WidgetModal from 'pages/Dashboard/modals/WidgetModal';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OverviewLeft, OverviewRight, OverviewWrapper, WelcomeText } from './styles';

function Overview() {
  const dispatch = useDispatch();
  const [openWidget, setOpenWidget] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const userData = token?.profile;
  const userName = `${userData?.first_name}  ${userData?.last_name}`;

  const [filterRange, setFilterRange] = useState({
    startDate: new Date(),
    endDate: new Date()
  });
  const [datePick, setDatePick] = useState(false);
  const toogleDateRange = () => setDatePick((prev) => !prev);

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

  return (
    <OverviewWrapper>
      <Card className="overview-card">
        <OverviewLeft>
          <WelcomeText>{`Welcome ${userName}`}</WelcomeText>
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
