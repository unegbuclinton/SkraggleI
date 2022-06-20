import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconCopy } from 'icons';
import { React, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function LeafLnc({ className }) {
  const { eachP2p } = useSelector((state) => state.p2p);
  const { fundraiser_display_name, donations_count, raised } = eachP2p;
  const textArea = useState(null);

  const copyToClipboard = useCallback(() => {
    const text = textArea.current.value;
    navigator.clipboard.writeText(text);
    alert('Text Copied');
  }, []);

  return (
    <P2PFundraiserWrapper className={className}>
      <div className="fundraiser__top">
        <div className="fundraiser__title">
          <p className="fundraiser__paragraph">P2P fundraiser</p>
          <h1 className="fundraiser__heading">{fundraiser_display_name}</h1>
        </div>
        <div>
          <div className="fundraiser__id">ID</div>
          <div className="fundraiser__no">
            <textarea className="fundraiser__textArea" value="NRTFSTPL" ref={textArea} />
            <Button type="button" className="fundraiser__copy-button" onClick={copyToClipboard}>
              <DPIconCopy />
            </Button>
          </div>
        </div>
      </div>
      <div className="fundraiser__down">
        <div className="fundraiser__info">
          <p className="fundraiser__paragraph">Status</p>
          <div className="fundraiser__active">Active</div>
        </div>
        <div className="fundraiser__info-1">
          <p className="fundraiser__paragraph">Supporter</p>
          <div className="fundraiser__active__supporter">Partho Prothim</div>
        </div>
        <div className="fundraiser__info-2">
          <p className="fundraiser__paragraph">Total raised</p>
          <div className="fundraiser__active__raised">{raised} USD</div>
        </div>
        <div className="fundraiser__info-3">
          <p className="fundraiser__paragraph">Donations</p>
          <div className="fundraiser__active__donations">{donations_count}</div>
        </div>
      </div>
    </P2PFundraiserWrapper>
  );
}

export default LeafLnc;

export const P2PFundraiserWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  padding-bottom: 3.2rem;
  margin-bottom: 2.4rem;
  height: 20.4rem;
  flex: 5;
  .fundraiser {
    &__top {
      width: 100%;
      height: 11.5rem;
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
    &__paragraph {
      margin-bottom: 0.8rem;
      font-size: 12px;
      line-height: 14px;
      color: #9a9aa9;
    }
    &__heading {
      font-size: ${FONTSIZES.xxlarge};
      font-weight: ${FONTWEIGHTS.normal};
    }
    &__id {
      font-size: 1.47rem;
      color: ${COLORS['gray-500']};
    }
    &__no {
      display: flex;
      align-items: baseline;
      font-size: 1.47rem;
      color: ${COLORS['grey-500']};
    }
    &__copy-button {
      display: flex;
      left: 0;
      background-color: ${COLORS.white};
      margin: 0;
      padding: 0;
    }
    &__textArea {
      outline: none;
      border: none;
      resize: none;
    }
    &__down {
      display: flex;
      padding-left: 4.8rem;
      padding-right: 4.9rem;
      padding-top: 1.6rem;
    }
    &__info {
      display: flex;
      flex-direction: column;
      width: 11.9rem;
      border-right: 2px solid #9a9aa9;
    }
    &__info-1 {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 20.5rem;
      border-right: 2px solid #9a9aa9;
    }
    &__info-2 {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 17.1rem;
      border-right: 2px solid #9a9aa9;
    }
    &__info-3 {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 20.5rem;
    }
    &__active {
      font-size: ${FONTSIZES.base};
      color: #00903a;
      &__supporter {
        font-size: ${FONTSIZES.base};
        color: #8358fe;
      }
      &__raised {
        font-size: ${FONTSIZES.base};
        color: #1e003e;
      }
      &__donations {
        font-size: ${FONTSIZES.base};
        color: #1e003e;
      }
    }
  }
`;
