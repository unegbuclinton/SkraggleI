import PageLinks from 'components/atoms/PageLinks';
import DashboardLayout from 'components/layouts/DashboardLayout';
import VerticalTab from 'components/molecules/VerticalTabs';
import { COLORS } from 'constants/colors';
import FormsSubTab from 'pages/Forms/FormsSubTab';
import ThankYouComponent from 'pages/Forms/FormsSubTab/ThankYou';
import Url from 'pages/Forms/FormsSubTab/URL';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import DonationAmountFormOnce from './DonationAmounts/donationAmountFormOnce';
import DonationAmounts from './DonationAmounts/DonationMain';
import DonationSetup from './donationSetup';
import GeneralSettingsMain from './GeneralSettings/generalSettings';
import ProcessingFee from './ProcessingFee/ProcessingFee';
import SupportTab from './supportTabs';

function ProcessingFeeMain() {
  const components = [
    { title: 'General Settings', component: GeneralSettingsMain },
    { title: 'Donation Setup', component: DonationSetup },
    { title: 'Donation Amounts', component: DonationAmounts },
    { title: 'Processing Fee', component: ProcessingFee },
    { title: 'Supporter', component: SupportTab },
    { title: 'Thank You Page', component: ThankYouComponent },
    { title: 'URL', component: Url }
  ];
  const { formsByID } = useSelector((state) => state.forms);
  const { name } = formsByID;

  return (
    <DashboardLayout pageLinks={<PageLinks pageLinkBefore="Foms" to="/forms" names={name} />}>
      <FormsWrapper>
        <FormsSubTab />

        <ProcessingFeeWrapper>
          <VerticalTab
            disabled
            tabs={components}
            className="vertical-tab__container"
            verticalWrapper="vertical-tab-wrapper"
            content="content-wrapper"
            leftTabs
          />
        </ProcessingFeeWrapper>
      </FormsWrapper>
    </DashboardLayout>
  );
}

export default ProcessingFeeMain;

export const FormsWrapper = styled.div`
  height: 100%;
  overflow: hidden;
`;

export const ProcessingFeeWrapper = styled.div`
  display: flex;
  height: 78%;
  margin-top: 2.4rem;
  overflow: hidden;
  .vertical-tab__container {
    overflow: hidden;
    gap: 1.6rem;
    width: 100%;
    height: 100%;
  }

  .vertical-tab-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 4.004rem 0 0 5.4rem;
    background-color: ${COLORS.white};
    width: 20.9rem;
    padding-left: 3.54rem;
    padding-top: 3.7rem;
    margin-left: 0rem;
    margin-top: 0rem;
    margin-right: 0rem;
  }
  .content-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin-left: 0;
    display: flex;
    flex: 1 auto;
  }
`;
