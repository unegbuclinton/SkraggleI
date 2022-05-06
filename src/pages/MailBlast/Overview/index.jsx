import React from 'react';
import Card from 'components/atoms/Card';
import { NewstellerWrapper } from './styles';
import { NewstellerTop } from './styles';
import Button from 'components/atoms/Button/Button';
import { NewstellerBody } from './styles';
import StatisticsTracker from 'components/molecules/StatisticsTracker';

function Overview({ ...props }) {
  return (
    <NewstellerWrapper>
      <Card className="overview-card">
        <NewstellerTop>
          <div className="newsteller-left">
            <div className="top">
              <p>Mail Blasts Overview</p>
              <p>Associated Campaign</p>
            </div>
            <div className="bottom">
              <p className="left">Monthly newsletter</p>
              <p className="right">Annual Fundraiser</p>
            </div>
          </div>
          <div className="newsteller-right">
            <Button pill className="newsteller-btn">
              Sent
            </Button>
            <p>Send 20, 2020 - 06:20 PM</p>
          </div>
        </NewstellerTop>
        <NewstellerBody>
          <p className="body-header">
            Statistics <span className="added-text">(12 Recipients)</span>
          </p>
          <div className="newsteller-metric">
            <StatisticsTracker
              percentage={80}
              colour="#FF576B"
              num="(32)"
              value="20"
              header="Delivered"
              text="Unopened"
            />
            <StatisticsTracker
              percentage={25}
              colour="#FF576B"
              num="(12)"
              value="2"
              text="Unsubscribed"
            />
            <StatisticsTracker
              percentage={5}
              colour="#FF576B"
              num="(2)"
              value="5"
              text="Rejected"
            />

            <div className="sumed-value">
              <p className="sumed-value__num">$123</p>
              <p className="sumed-value__text">Raised</p>
            </div>
          </div>
        </NewstellerBody>
      </Card>
    </NewstellerWrapper>
  );
}

export default Overview;
