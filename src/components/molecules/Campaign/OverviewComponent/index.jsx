import Button from 'components/atoms/Button/Button';
import SelectDropDown from 'components/atoms/GenericDropdown';
import { useFormik } from 'formik';
import { DPIconTransaction } from 'icons/index';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { campaignOverview } from 'validation/Schema';
import {
  CampaignNameWrapper,
  ContainerDropdwon,
  LeftSection,
  MainWrapper,
  RightSection
} from './styles';

const CampaignOverview = () => {
  const formik = useFormik({
    initialValues: {
      task: ''
    },
    validationSchema: campaignOverview,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const data = [
    { value: <div>Hello</div>, label: <div>Hello</div> },
    { value: 'Archive', label: 'Archive' },
    { value: 'Delete', label: 'Delete' }
  ];

  // const [selected, setSelected] = useState('Filters');

  let navigate = useNavigate();
  const HandleButtonClick = () => {
    navigate('/donations');
  };
  return (
    <MainWrapper>
      <LeftSection>
        <ContainerDropdwon>
          <SelectDropDown
            className="action-dropdown__container"
            placeholder={'Lorem Ipsum'}
            id="emailSubscription"
            name="emailSubscription"
            type={'text'}
            options={data}
            value={formik.values.emailSubscription}
            onChange={(value) => formik.setFieldValue('emailSubscription', value.value)}
            onBlur={formik.handleBlur}
          />
        </ContainerDropdwon>

        <CampaignNameWrapper className="campaign-name">
          <p className="campaign-name__title">Campaign Name</p>
          <h1 className="campaign-name__description">African Orphan Kids</h1>
        </CampaignNameWrapper>
        <CampaignNameWrapper className="campaign-name">
          <p className="campaign-name__title">Description</p>
          <h1 className="campaign-name__description">Lorem Ipsum</h1>
        </CampaignNameWrapper>
        <CampaignNameWrapper className="campaign-name">
          <p className="campaign-name__title">Status</p>
          <Button className="campaign-name__button">Active</Button>
        </CampaignNameWrapper>
        <CampaignNameWrapper className="campaign-name">
          <p className="campaign-name__title">Fundraising Goals</p>
          <h1 className="campaign-name__description">$15,000</h1>
        </CampaignNameWrapper>
        <CampaignNameWrapper className="campaign-name">
          <p className="campaign-name__title">Fundraising Progress</p>
          <h1 className="campaign-name__description">$0, (0%)</h1>
        </CampaignNameWrapper>
      </LeftSection>

      <RightSection>
        <div className="campaign-name__top">
          <div className="campaign-name__card">
            <p className="card__title">DONATIONS</p>
            <h1 className="card__description">$25,200</h1>
          </div>
          <div className="campaign-name__card">
            <p className="card__title">REVENUE</p>
            <h1 className="card__description">$25,200</h1>
          </div>
          <div className="campaign-name__card">
            <p className="card__title">VOLUNTEERING</p>
            <h1 className="card__description">0Hrs</h1>
          </div>
        </div>
        <div className="campaign-name__bottom">
          <h1 className="campaign-name__bottom-heading">No trasaction yet</h1>
          <p className="campaign-name__bottom-paragraph">
            All fundraising transactions will be tracked here (manually or automatically through
            online forms). You can also issue tax receipts and manage other sources of revenue.
          </p>
          <div className="campaign-name__transaction-icon">
            <DPIconTransaction />
          </div>
          <div className="campaign-name__button-container">
            <Button
              className="campaign-name__transaction-button"
              onClick={() => HandleButtonClick()}>
              Go to Transaction
            </Button>
          </div>
        </div>
      </RightSection>
    </MainWrapper>
  );
};

export default CampaignOverview;
