import Button from 'components/atoms/Button/Button';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconCopy } from 'icons';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatDate } from 'utilities/helpers';

const P2PFundraise = ({ className }) => {
  const { token } = useSelector((state) => state.auth);

  const { eachP2p } = useSelector((state) => state.p2p);
  const { campaign, created_at } = eachP2p;

  const textArea = useState(null);

  function copyToClipboard1() {
    var text = textArea.current.value;
    navigator.clipboard.writeText(text);
    alert('Text Copied');
  }

  const userData = token?.profile;

  const userName = `${userData?.first_name}  ${userData?.last_name}`;

  return (
    <P2PFundraiser id="p2pfund" className={className}>
      <div className="fundraiser__top">
        <div className="fundraiser__title">
          <h1 className="fundraiser__heading">P2P Fundraiser</h1>
        </div>
      </div>
      <div className="fundraiser__down">
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Campaign</h1>
          <p className="fundraiser__p1">{campaign}</p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Supporter</h1>
          <p className="fundraiser__p1">{userName}</p>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Share link</h1>
          <div className="fundraiser__no">
            <textarea
              className="fundraiser__textArea"
              value="https://Commodo et non turpis et viverra risus/"
              readOnly></textarea>
            <Button type="button" className="fundraiser__copy-button" onClick={copyToClipboard1}>
              <DPIconCopy />
            </Button>
          </div>
        </div>
        <div className="fundraiser__row">
          <h1 className="fundraiser__titles">Start Date</h1>
          <p className="fundraiser__p2"> {formatDate(created_at)}</p>
        </div>
      </div>
    </P2PFundraiser>
  );
};

export default P2PFundraise;

export const P2PFundraiser = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  margin-bottom: 2.4rem;
  padding-bottom: 1.4rem;
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
      margin-bottom: 1.6rem;
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
    }
    &__p2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    &__no {
      display: flex;
      align-items: baseline;
      font-size: 1.47rem;
      color: ${COLORS['grey-500']};
    }
    &__copy-button {
      width: 2rem;
      left: 0;
      background-color: ${COLORS.white};
      margin: 0;
      padding: 0;
    }
    &__textArea {
      width: 35.2rem;
      font-size: ${FONTSIZES.base};
      display: flex;
      outline: none;
      border: none;
      resize: none;
    }
  }
`;
