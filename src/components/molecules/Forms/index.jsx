import DashboardLayout from 'components/layouts/DashboardLayout';
import VerticalTab from 'components/molecules/VerticalTabs';
import { COLORS } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import DonationMain from './DonationAmounts/DonationMain';
import DonationSetup from './donationSetup';
import GeneralSettingsMain from './GeneralSettings/generalSettings';
import ProcessingFee from './ProcessingFee/ProcessingFee';
import SupportTab from './supportTabs';

function ProcessingFeeMain() {
  const components = [
    { title: 'General Settings', component: GeneralSettingsMain },
    { title: 'Donation Setup', component: DonationSetup },
    { title: 'Donation Amounts', component: DonationMain },
    { title: 'Processing Fee', component: ProcessingFee },
    { title: 'Supporter', component: SupportTab }
  ];
  return (
    <DashboardLayout>
      <ProcessingFeeWrapper>
        <VerticalTab
          tabs={components}
          className="vertical-tab__container"
          verticalWrapper="vertical-tab-wrapper"
        />
      </ProcessingFeeWrapper>
    </DashboardLayout>
  );
}

export default ProcessingFeeMain;

export const ProcessingFeeWrapper = styled.div`
  .vertical-tab__container {
    gap: 1.6rem;
  }

  .vertical-tab-wrapper {
    display: flex;
    flex-direction: column;
    margin: 4.004rem 0 0 5.4rem;
    background-color: ${COLORS.white};
    width: 20.9rem;
    padding-left: 3.54rem;
    padding-top: 3.7rem;
    margin-left: 1.6rem;
    margin-top: 0rem;
    margin-right: 0rem;
  }
`;
