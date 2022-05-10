import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconProfileImage } from 'icons';
import { React } from 'react';
import styled from 'styled-components';

function Settings({ className }) {
  return (
    <SettingsWrapper className={className}>
      <div className="fundraiser__top">
        <div className="fundraiser__title">
          <h1 className="fundraiser__heading">Settings</h1>
        </div>
      </div>
      <div className="fundraiser__down">
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Display Name</h1>
          <p className="fundraiser__p2">Leaf Inc</p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Designation</h1>
          <p className="fundraiser__p2">Match checkout settings</p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Goal</h1>
          <p className="fundraiser__p2">$150,000.000 USD</p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Offline amount</h1>
          <p className="fundraiser__p2">$0.00 USD</p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Offline donations</h1>
          <p className="fundraiser__p2">0</p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Goal date</h1>
          <p className="fundraiser__p2">Dec 15, 2021</p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Personal Message</h1>
          <p className="fundraiser__p3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor dignissim enim erat
            lacus sagittis metus. Habitant adipiscing aliquam.
          </p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Supporter Name</h1>
          <p className="fundraiser__p2">Dec 1, 2021</p>
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
      margin-left: 2.7rem;
    }
  }
`;
