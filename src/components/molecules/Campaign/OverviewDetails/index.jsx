import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card/index';
import { COLORS } from 'constants/colors';
import { FONTSIZES } from 'constants/font-spec';
import { editCampaign, getAllCampaigns, singleCampaign } from 'features/campaign/campaignSlice';
import { DPIconBin, DPIconDelete, DPIconDonationMore, DPIconGoodMark } from 'icons';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import EditCampaignModal from '../CreateCampaignModal/EditCampaignModal';

function OverviewDetails() {
  const [open, setOpen] = useState(false);
  const { campaignByID } = useSelector((state) => state.campaign);
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);

  const { name, description, status, fundraising_goal, amount_raised, id } = campaignByID;

  const progressPercentage = Math.floor(amount_raised / fundraising_goal);

  const ArchiveCampaign = () => {
    const body = {
      archived: true
    };
    dispatch(editCampaign({ body, id })).then(() => {
      toast.success('Campaign archived successfully');
      dispatch(getAllCampaigns());
      dispatch(singleCampaign(id));
    });
  };
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (openMenu && ref.current && !ref.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.body.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [openMenu]);

  return (
    <>
      <EditCampaignModal
        isShown={open}
        onClose={() => {
          setOpen(false);
        }}
      />
      <LeftSection>
        <ContainerDropdwon openMenu={openMenu} ref={ref}>
          <p>Campaign Details </p>
          <div className="dropdown-icon" onClick={() => setOpenMenu((prev) => !prev)}>
            <DPIconDonationMore />
          </div>

          <div className="section-dropdown">
            <IconWrapper className="good-mark" onClick={() => ArchiveCampaign}>
              <DPIconBin />
              Archive
            </IconWrapper>

            <IconWrapper className="good-mark">
              <DPIconGoodMark />
              Edit
            </IconWrapper>

            <IconWrapper>
              <DPIconDelete className="delete-icon" />
              Delete
            </IconWrapper>
          </div>
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
    </>
  );
}

export default OverviewDetails;

export const LeftSection = styled(Card)`
  display: flex;
  flex-direction: column;
  max-width: 34.6rem;
  width: 100%;
  margin-right: 1.6rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  height: 100%;
  overflow: auto;

  .action-dropdown__container {
    width: 12rem;
    height: 4.8rem;
    font-size: ${FONTSIZES.xsmall};
  }
`;

export const ContainerDropdwon = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 1.8rem;
  padding-top: 1.6rem;
  padding-left: 1.7rem;
  margin-bottom: 1.8rem;
  font-size: ${FONTSIZES.base};
  .dropdown-icon {
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: ${COLORS['gray-500']};
    }
  }

  .section-dropdown {
    position: absolute;
    top: 50px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: ${({ openMenu }) => (openMenu ? '' : '0')};
    overflow: ${({ openMenu }) => (openMenu ? '' : 'hidden')};
    background-color: ${COLORS.white};
    padding: 1.5rem 1.5rem 0rem 1.5rem;
    box-shadow: ${({ openMenu }) => (openMenu ? '-5px 5px 5px -3px rgb(0 0 0 / 20%)' : '')};
  }
`;
export const CampaignNameWrapper = styled.div`
  border-bottom: 1px solid #e6eff1;
  padding-bottom: 1.8rem;
  padding-left: 1.7rem;
  margin-bottom: 2.1em;
  .campaign-name {
    &__title {
      font-size: 12px;
      line-height: 152.69%;
      color: #626262;
      margin-bottom: 1rem;
    }

    &__description {
      font-size: 14px;
      font-weight: 400;
      line-height: 152.69%;
      color: #1e003e;
    }

    &__button {
      padding: 0;
      width: 9.173rem;
      height: 3rem;
      background-color: rgba(125, 194, 55, 0.2);
      border-radius: 40px;
      color: #00913a;
      text-align: center;
      line-height: 140%;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2rem;
  cursor: pointer;
  .delete-icon {
    fill: rgba(0, 0, 0, 0.73);
    width: 1.5rem;
    height: 1.5rem;
  }
`;
