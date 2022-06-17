import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

const Donations = ({ className }) => {
  return (
    <DonationWrapper className={className} id="donations">
      <div className="fundraiser__top">
        <div className="fundraiser__title">
          <h1 className="fundraiser__heading">Donations</h1>
        </div>
      </div>
      <div className="fundraiser__down">
        <div className="fundraiser__custom-field">
          <h1 className="fundraiser__donations">No Donations</h1>
        </div>
      </div>
    </DonationWrapper>
  );
};

export default Donations;

export const DonationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  margin-bottom: 2.4rem;
  padding-bottom: 3rem;
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
    &__custom-field {
      display: flex;
      width: 100%;
    }
    &__donations {
      font-size: ${FONTSIZES.base};
      font-weight: ${FONTWEIGHTS.normal};
    }
  }
`;
