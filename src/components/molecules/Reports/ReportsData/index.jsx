import { getDonationByContact } from 'features/report/reportSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import CampaignPerformance from './CampaignPerformance';
import Contacts from './Contacts';
import Donations from './Donations';
import MailBlastPerformance from './MailBlastPerformance';
import P2PFundraiser from './P2PFundraiser';
import Transaction from './Transactions/Transaction';

function ReportsData() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDonationByContact());
    // dispatch(getP2PLeaderBoard());
  });
  return (
    <ReportsDataMain>
      <Transaction />
      <Donations />
      <Contacts />
      <CampaignPerformance />
      <MailBlastPerformance />
      <P2PFundraiser />
    </ReportsDataMain>
  );
}

export default ReportsData;

export const ReportsDataMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;
