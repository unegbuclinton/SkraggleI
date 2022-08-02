import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import { DPIconThankYou } from 'icons';
import React from 'react';
import { CardLeft, CardRight, PotentialBody, PotentialCard, PotentialWrapper } from './styles';

function PotentialDonor() {
  return (
    <PotentialWrapper>
      <Card className="potential-card">
        <p className="thankyou-text">October&#39;s Potential Donors</p>

        <PotentialBody>
          <PotentialCard>
            <CardLeft>
              <DPIconThankYou />
              <div className="card-text">
                <p className="card-text__one">LYBUNTs $500+</p>
                <p className="card-text__two">
                  This list shows you contacts who contributed more than $500 in total donations to
                  your organization last year but are yet to contribute this year.
                </p>
              </div>
            </CardLeft>
            <CardRight>
              <p className="contact">11 Contacts</p>
              <Button action="true" className="thank__btn">
                Take Action
              </Button>
            </CardRight>
          </PotentialCard>
          <PotentialCard>
            <CardLeft>
              <DPIconThankYou />
              <div className="card-text">
                <p className="card-text__one">LYBUNTs $50-$500</p>
                <p className="card-text__two">
                  This list shows you contacts who contributed between $50 and $500 in total
                  donations to your organization last year but are yet to contribute this year
                </p>
              </div>
            </CardLeft>
            <CardRight>
              <p className="contact">11 Contacts</p>
              <Button action="true" className="thank__btn">
                Take Action
              </Button>
            </CardRight>
          </PotentialCard>
        </PotentialBody>
      </Card>
    </PotentialWrapper>
  );
}

export default PotentialDonor;
