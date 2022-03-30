import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card";
import React from "react";
import { DefaultWrapper, DefaultHeader, TemplateItems } from "./styles";

function DefaultTemplate() {
  return (
    <DefaultWrapper>
      <Card className = 'default-card'>
        <div className="section-container">
          <DefaultHeader>Newsletter</DefaultHeader>
          <TemplateItems>
            <div className="template-item"></div>
            <div className="template-item"></div>
            <div className="template-item"></div>
          </TemplateItems>
        </div>
        <div className="section-container">
          <DefaultHeader>Fundraising</DefaultHeader>
          <TemplateItems>
            <div className="template-item"></div>
            <div className="template-item"></div>
            <div className="template-item"></div>
          </TemplateItems>
        </div>
        <div className="section-container-text">
          <DefaultHeader>Occasions & Holidays</DefaultHeader>
        </div>
        <div className="section-container-text">
          <DefaultHeader>Events</DefaultHeader>
        </div>
        <div className="section-container">
          <DefaultHeader>Stewardship</DefaultHeader>
          <TemplateItems>
            <div className="template-item"></div>
            <div className="template-item"></div>
            <div className="template-item"></div>
          </TemplateItems>
        </div>
        <div className="section-container">
          <DefaultHeader>Basic</DefaultHeader>
          <TemplateItems>
            <div className="template-item"></div>
            <div className="template-item"></div>
            <div className="template-item"></div>
          </TemplateItems>
        </div>

        <div className="default-footer">
          <Button invert auth className="default-cancel-btn">
            Cancel
          </Button>
          <Button auth className="default-save-btn">
            Save
          </Button>
        </div>
      </Card>
    </DefaultWrapper>
  );
}

export default DefaultTemplate;
