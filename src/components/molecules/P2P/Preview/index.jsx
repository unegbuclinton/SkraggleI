import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import ProgressBar from 'components/atoms/ProgressBar';
import Slideshow from 'components/molecules/SlideShow';
import Tabs from 'components/molecules/Tabs';
import {
  DPIconCopyWhite,
  DPIconEmailShare,
  DPIconFacebook,
  DPIconLeaderBoard,
  DPIconLinkedin,
  DPIconProfileImage,
  DPIconTwitter
} from 'icons';
import React, { useCallback, useState } from 'react';
import RecentDonation from '../Tables/RecentDonation';
import { ButtonCopy, CopyText, Leaderboard, LinksWrapper, PreviewWrapper } from './styles';

function Preview() {
  const tabs = [
    {
      title: 'Recent Donation',
      component: <RecentDonation />
    },
    {
      title: 'Top Participants',
      component: <RecentDonation />
    }
  ];

  const buttonsGroup = [
    {
      id: '1',
      title: '$10'
    },
    {
      id: '2',
      title: '$100'
    },
    {
      id: '3',
      title: '$500'
    },
    {
      id: '4',
      title: '$1000'
    }
  ];

  const [active, setActive] = useState(1);

  const handleClick = (event) => {
    event.preventDefault();
    setActive(event.target.id);
  };

  const textArea = useState(null);

  const copyToClipboard = useCallback((e) => {
    textArea.current.select();
    navigator.clipboard.writeText(textArea.current.select());
    e.target.focus();
    alert('Text Copied');
  }, []);

  return (
    <div>
      <PreviewWrapper>
        <Slideshow />
        <div className="preview__right">
          <div className="preview__profile">
            <DPIconProfileImage />
            <div className="preview__profile-data">
              <div className="preview__profile">Supporter</div>
              <div className="preview__profile-name">Partho Prothim</div>
            </div>
          </div>
          <div className="preview__heading">BGA awesome campaign demo #1</div>

          <ProgressBar value={195400} target={500000} />
          <div className="preview__bar-values">
            <div className="preview__bar-values__initial">$100</div>
            <div className="preview__bar-values__mid">$500</div>
            <div className="preview__bar-values__mid">$1000</div>
            <div className="preview__bar-values__high">$2000</div>
            <div className="preview__bar-values__high">$5000</div>
            <div className="preview__bar-values__high">$10000</div>
            <div className="preview__bar-values__high">$100000</div>
          </div>

          <div className="preview__select-donation">
            Select Donation Amount
            <div className="preview__button-container">
              {buttonsGroup.map((btn) => (
                <Button
                  key={btn.id}
                  className={active === btn.id ? 'preview__button' : 'preview__notActive'}
                  id={btn.id}
                  onClick={handleClick}>
                  {btn.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="preview__select-donation">
            Enter Custom Amount
            <div className="preview__input-container">
              <div className="preview__dollar">$</div>
              <input type="text" className="preview__input" placeholder="$2000" />
            </div>
          </div>
          <div className="preview__buttons-donate">
            <Button className="preview__donate-button">Donate</Button>
            <Button className="preview__fundraise-button">P2P Fundraise</Button>
          </div>
        </div>
      </PreviewWrapper>
      <Leaderboard>
        LeaderBoard
        <DPIconLeaderBoard className="leaderboard-icon" />
      </Leaderboard>
      <Card>
        <Tabs tabs={tabs} />
      </Card>
      <LinksWrapper>
        <h1 className="preview__link">Use this link to direct donors to your new P2P fundraiser</h1>
        <div className="preview__textarea">
          <CopyText ref={textArea} value="Lorem ipsum dolor sit amet, consectetur adipisci..." />
          <ButtonCopy className="preview__copy-button" onClick={copyToClipboard}>
            <DPIconCopyWhite className="preview__icon-copy" />
            Copy
          </ButtonCopy>
        </div>
        <div className="preview__socialMedia">
          <div className="preview__facebook">
            <DPIconFacebook />
            Share on Facebook
          </div>
          <div className="preview__facebook">
            <DPIconTwitter />
            Share on Twitter
          </div>
          <div className="preview__facebook">
            <DPIconLinkedin />
            Share on LinkedIn
          </div>
          <div className="preview__facebook">
            <DPIconEmailShare />
            Share via Email
          </div>
        </div>
      </LinksWrapper>
    </div>
  );
}

export default Preview;
