import Button from 'components/atoms/Button/Button';
import SelectDropDown from 'components/atoms/GenericDropdown';
import { editCampaign, getAllCampaigns } from 'features/campaign/campaignSlice';
import { useFormik } from 'formik';
import { DPIconBin, DPIconDelete, DPIconGoodMark } from 'icons';
import { DPIconTransaction } from 'icons/index';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { capitalizeFirstLowercaseRest } from 'utilities/helpers';
import { campaignOverview } from 'validation/Schema';
import EditCampaignModal from '../CreateCampaignModal/EditCampaignModal';
import {
  CampaignNameWrapper,
  ContainerDropdwon,
  IconWrapper,
  LeftSection,
  MainWrapper,
  RightSection
} from './styles';

const CampaignOverview = () => {
  const [open, setOpen] = useState(false);
  const { campaignByID } = useSelector((state) => state.campaign);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { name, description, status, fundraising_goal, amount_raised, id } = campaignByID;

  const progressPercentage = Math.floor(amount_raised / fundraising_goal);

  const ArchiveCampaign = () => {
    const body = {
      archived: true
    };
    dispatch(editCampaign({ body, id })).then(() => {
      navigate('/campaign');
      toast.success('Campaign archived successfully');
      dispatch(getAllCampaigns());
    });
  };
  const formik = useFormik({
    initialValues: {
      task: ''
    },
    validationSchema: campaignOverview,
    onSubmit: () => {}
  });

  const data = [
    {
      value: (
        <IconWrapper>
          <DPIconGoodMark />
          Edit Campaign
        </IconWrapper>
      ),
      label: (
        <IconWrapper className="good-mark" onClick={() => setOpen(true)}>
          <DPIconGoodMark />
          Edit
        </IconWrapper>
      )
    },
    {
      value: (
        <IconWrapper>
          <DPIconBin />
          Archive
        </IconWrapper>
      ),
      label: (
        <IconWrapper className="good-mark" onClick={ArchiveCampaign}>
          <DPIconBin />
          Archive
        </IconWrapper>
      )
    },
    {
      value: (
        <IconWrapper>
          <DPIconDelete className="delete-icon" />
          Delete Campaign
        </IconWrapper>
      ),
      label: (
        <IconWrapper className="good-mark">
          <DPIconDelete className="delete-icon" />
          Delete
        </IconWrapper>
      )
    }
  ];

  const HandleButtonClick = () => {
    navigate('/donations');
  };
  return (
    <MainWrapper>
      <EditCampaignModal
        isShown={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      <LeftSection>
        <ContainerDropdwon>
          <SelectDropDown
            className="action-dropdown__container"
            placeholder={'Action'}
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
          <h1 className="campaign-name__description">{`${name}`}</h1>
        </CampaignNameWrapper>
        <CampaignNameWrapper className="campaign-name">
          <p className="campaign-name__title">Description</p>
          <h1 className="campaign-name__description">{`${description}`}</h1>
        </CampaignNameWrapper>
        <CampaignNameWrapper className="campaign-name">
          <p className="campaign-name__title">Status</p>
          <Button className="campaign-name__button">{status}</Button>
        </CampaignNameWrapper>
        <CampaignNameWrapper className="campaign-name">
          <p className="campaign-name__title">Fundraising Goals</p>
          <h1 className="campaign-name__description">{fundraising_goal?.toLocaleString()}</h1>
        </CampaignNameWrapper>
        <CampaignNameWrapper className="campaign-name">
          <p className="campaign-name__title">Fundraising Progress</p>
          <h1 className="campaign-name__description">
            ${amount_raised?.toLocaleString()}, {progressPercentage}%
          </h1>
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
