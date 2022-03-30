import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card";
import React from "react";
import { ContentWrapper, ContentTop } from "./styles";

function MailContent() {
  return (
    <ContentWrapper>
      <Card>
        <ContentTop>
          <div className="content-left">
            <div className="top">
              <p>Mail Blasts Overview</p>
              <p>Associated Campaign</p>
            </div>
            <div className="bottom">
              <p className="left">Monthly newsletter</p>
              <p className="right">Annual Fundraiser</p>
            </div>
          </div>
          <div className="content-right">
            <Button pill className="content-btn">
              Sent
            </Button>
            <p>Send 20, 2020 - 06:20 PM</p>
          </div>
        </ContentTop>
      </Card>
    </ContentWrapper>
  );
}

export default MailContent;
