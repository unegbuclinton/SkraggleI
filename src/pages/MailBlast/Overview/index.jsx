import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import StatisticsTracker from 'components/molecules/StatisticsTracker';
import React from 'react';
import { useSelector } from 'react-redux';
import { NewstellerBody, NewstellerTop, NewstellerWrapper } from './styles';

function Overview() {
  const { eachMailBlast } = useSelector((state) => state.mailBlast);
  const { name, sent_at, raised_amount } = eachMailBlast;
  const mailBlastData = eachMailBlast?.campaign;
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
              <p className="left">{name}</p>
              <p className="right">{mailBlastData?.description}</p>
            </div>
          </div>
          <div className="newsteller-right">
            <Button pill className="newsteller-btn">
              Sent
            </Button>
            <p>{sent_at}</p>
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
              <p className="sumed-value__num">${raised_amount}</p>
              <p className="sumed-value__text">Raised</p>
            </div>
          </div>
        </NewstellerBody>
      </Card>
    </NewstellerWrapper>
  );
}

export default Overview;
