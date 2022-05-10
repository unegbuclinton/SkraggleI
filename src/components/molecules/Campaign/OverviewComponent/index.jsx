import Button from 'components/atoms/Button/Button';
import DropdownComponent from 'components/atoms/Dropdown';
import { DPIconTransaction } from 'icons/index';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CampaignNameWrapper,
  ContainerDropdwon,
  LeftSection,
  MainWrapper,
  RightSection
} from './styles';

const CampaignOverview = () => {
  const data = [
    {
      id: '1',
      name: 'Action'
    },
    {
      id: '2',
      name: 'Add'
    },
    {
      id: '3',
      name: 'Delete'
    },
    {
      id: '4',
      name: 'Modify'
    }
  ];

  const [selected, setSelected] = useState('Filters');

  let navigate = useNavigate();
  const HandleButtonClick = () => {
    navigate('/donations');
  };
  return (
    <MainWrapper>
      <LeftSection>
        <ContainerDropdwon>
          <DropdownComponent
            data={data}
            selected={selected}
            setSelected={setSelected}
            className="action-dropdown__container"
            content
            iconDropdown="dropdown-icon"
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
