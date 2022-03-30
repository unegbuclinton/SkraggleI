import React from "react";
import Card from "components/atoms/Card";
import { NewstellerWrapper } from "./styles";
import { NewstellerTop } from "./styles";
import Button from "components/atoms/Button/Button";
import { NewstellerBody } from "./styles";

function MonthlyNewsteller() {
  return (
    <NewstellerWrapper>
      <Card>
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
        </NewstellerBody>
      </Card>
    </NewstellerWrapper>
  );
}

export default MonthlyNewsteller;
