import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card/Card";
import { DPIconThankYou } from "icons";
import React from "react";
import { ThankYouBody, ThankyouCard, ThankYouWrapper } from "./styles";

function ThankYou() {
  return (
    <ThankYouWrapper>
      <Card  className='thankyou-card'>
        <p className="thankyou-text">Thank You</p>
        <ThankYouBody>
          <ThankyouCard>
            <div className="card-left">
              <DPIconThankYou />
              <div className="card-text">
                <p className="card-text__one">Contacts Who Donated this year</p>
                <p className="card-text__two">
                  Donors (2021) are contacts who have made a monetary
                  contribution to your organization, at least one, in 2021.
                </p>
              </div>
            </div>
            <div className="card-right">
              <p className="contact">11 Contacts</p>
              <Button action className="thank__btn">
                Take Action
              </Button>
            </div>
          </ThankyouCard>
          <ThankyouCard>
            <div className="card-left">
              <DPIconThankYou />
              <div className="card-text">
                <p className="card-text__one">Contacts Who Donated this year</p>
                <p className="card-text__two">
                  Donors (2021) are contacts who have made a monetary
                  contribution to your organization, at least one, in 2021.
                </p>
              </div>
            </div>
            <div className="card-right">
              <p className="contact">11 Contacts</p>
              <Button action className="thank__btn">
                Take Action
              </Button>
            </div>
          </ThankyouCard>
        </ThankYouBody>
      </Card>
    </ThankYouWrapper>
  );
}

export default ThankYou;
