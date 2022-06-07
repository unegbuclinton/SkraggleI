import DashboardLayout from 'components/layouts/DashboardLayout';
import VerticalTab from 'components/molecules/VerticalTabs';
import Contacts from 'components/molecules/WidgetComponents/Contacts';
import Forms from 'components/molecules/WidgetComponents/Forms';
import { COLORS } from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import DonationAmountMain from '../DonationAmounts';
import GeneralSettingsForm from '../GeneralSettings/generalSettingsForm';
import ProcessingFee from './ProcessingFee';

function ProcessingFeeMain() {
  const components = [
    { title: 'General Settings', component: GeneralSettingsForm },
    { title: 'Donation Setup', component: Contacts },
    { title: 'Donation Amounts', component: DonationAmountMain },
    { title: 'Processing Fee', component: ProcessingFee },
    { title: 'Supporter', component: Forms }
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
    overflow-y: auto;
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
