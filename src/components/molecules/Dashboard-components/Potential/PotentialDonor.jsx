import React from "react";
import { DPIconThankYou } from "icons";
import Button from "components/atoms/Button/Button";
import {
  PotentialBody,
  PotentialCard,
  PotentialWrapper,
} from "./styles";

function PotentialDonor() {
  return (
    <PotentialWrapper>
      <p className="thankyou-text">Thank You</p>

      <PotentialBody>
        <PotentialCard>
          <div className="card-left">
            <DPIconThankYou />
            <div className="card-text">
              <p className="card-text__one">Contacts Who Donated this year</p>
              <p className="card-text__two">
                Donors (2021) are contacts who have made a monetary contribution
                to your organization, at least one, in 2021.
              </p>
            </div>
          </div>
          <div className="card-right">
            <p className="contact">11 Contacts</p>
            <Button action className="thank__btn">
              Take Action
            </Button>
          </div>
        </PotentialCard>
        <PotentialCard>
          <div className="card-left">
            <DPIconThankYou />
            <div className="card-text">
              <p className="card-text__one">Contacts Who Donated this year</p>
              <p className="card-text__two">
                Donors (2021) are contacts who have made a monetary contribution
                to your organization, at least one, in 2021.
              </p>
            </div>
          </div>
          <div className="card-right">
            <p className="contact">11 Contacts</p>
            <Button action className="thank__btn">
              Take Action
            </Button>
          </div>
        </PotentialCard>
      </PotentialBody>
    </PotentialWrapper>
  );
}

export default PotentialDonor;
