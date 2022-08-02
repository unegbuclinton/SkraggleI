// import apiInstance from 'apiInstance';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconProfileImage } from 'icons';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatDate } from 'utilities/helpers';
import EditP2pModalComponent from '../../P2PFundraiserModalComponent/EditP2pModalComponent';

function Settings({ className }) {
  const [editModal, setEditModal] = useState(false);
  const { token } = useSelector((state) => state.auth);

  const userData = token?.profile;

  const userName = `${userData?.first_name}  ${userData?.last_name}`;

  const { eachP2p } = useSelector((state) => state?.p2p);
  const {
    fundraiser_display_name,
    designation,
    goal,
    goal_date,
    offline_amount,
    offline_donation,
    personal_message,
    goal_currency
  } = eachP2p;
  return (
    <SettingsWrapper className={className} id="settings">
      {editModal && (
        <EditP2pModalComponent isShown={editModal} onClose={() => setEditModal(false)} />
      )}
      <div className="fundraiser__top">
        <div className="fundraiser__title">
          <h1 className="fundraiser__heading">Settings</h1>
        </div>
        <p className="fundraiser__text" onClick={() => setEditModal(true)}>
          Edit
        </p>
      </div>
      <div className="fundraiser__down">
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Display Name</h1>
          <p className="fundraiser__p2">{fundraiser_display_name}</p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Designation</h1>
          <p className="fundraiser__p2">{designation}</p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Goal</h1>
          <p className="fundraiser__p2">{goal}</p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Offline amount</h1>
          <p className="fundraiser__p2">{`${offline_amount} ${goal_currency}`}</p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Offline donations</h1>
          <p className="fundraiser__p2">{`${offline_donation} ${goal_currency}`}</p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Goal date</h1>
          <p className="fundraiser__p2">{formatDate(goal_date)}</p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Personal Message</h1>
          <p className="fundraiser__p3">{personal_message}</p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Supporter name</h1>
          <p className="fundraiser__p2">{userName}</p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Fundraiser Photo</h1>

          <DPIconProfileImage />
        </div>
      </div>
    </SettingsWrapper>
  );
}

export default Settings;

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
  padding-bottom: 1.4rem;
  background-color: ${COLORS.white};
  .fundraiser {
    &__top {
      width: 100%;
      height: 8.4rem;
      display: flex;
      border-bottom: 1px solid ${COLORS.torquoise};
      justify-content: space-between;
      align-items: center;
      padding-left: 4.8rem;
      padding-right: 4.9rem;
    }
    &__title {
      display: flex;
      flex-direction: column;
    }
    &__heading {
      font-size: ${FONTSIZES.xxlarge};
      font-weight: ${FONTWEIGHTS.normal};
    }
    &__text {
      font-size: ${FONTSIZES.lg};
      font-weight: ${FONTWEIGHTS.normal};
      color: ${COLORS['moore-grey']};
      cursor: pointer;
    }
    &__down {
      display: flex;
      flex-direction: column;
      padding-left: 9.7rem;
      padding-right: 9.8rem;
      padding-top: 1.6rem;
      padding-bottom: 7.9rem;
    }
    &__row {
      display: flex;
      align-items: center;
      padding: 1.6rem 0;
      border-bottom: 1px solid ${COLORS.torquoise};
    }
    &__col1 {
      display: flex;
      flex-direction: column;
    }
    &__col2 {
      display: flex;
      flex-direction: column;
    }
    &__titles {
      font-weight: ${FONTWEIGHTS.normal};
      font-size: ${FONTSIZES.base};
      margin-right: 20rem;
      color: #9a9aa9;
      width: 16rem;
    }
    &__p1 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #8358fe;
      text-align: left;
    }
    &__p2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    &__p3 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;
