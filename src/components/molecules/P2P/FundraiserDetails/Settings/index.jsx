import apiInstance from 'apiInstance';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconProfileImage } from 'icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatDate } from 'utilities/helpers';

function Settings({ className }) {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const response = await apiInstance({
        method: 'get',
        url: '/admin'
      });
      const data = response?.data?.message;
      setUserData(data);
      // store.set()
      // dispatch(addUserData(data));
    };

    getUser();
  }, []);
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
      <div className="fundraiser__top">
        <div className="fundraiser__title">
          <h1 className="fundraiser__heading">Settings</h1>
        </div>
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
          <p className="fundraiser__p2">
            <DPIconProfileImage />
          </p>
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
      border-bottom: 1px solid #9a9aa9;
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
    &__down {
      display: flex;
      flex-direction: column;
      padding-left: 4.8rem;
      padding-right: 4.9rem;
      padding-top: 1.6rem;
    }
    &__row {
      display: flex;
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
      margin-bottom: 1.6rem;
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
      margin-bottom: 1.6rem;
    }
    &__p3 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 1.6rem;
    }
  }
`;
