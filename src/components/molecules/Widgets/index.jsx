import React from "react";
import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card";
import Contacts from "../WidgetComponents/Contacts";
import Forms from "../WidgetComponents/Forms";
import FundRaise from "../WidgetComponents/Fundraise";
import Projects from "../WidgetComponents/Projects";
import SmartWidget from "../WidgetComponents/SmartWidget";
import {
  WidgetBtn,
  WidgetWrapper,
} from "./styles";
import VerticalTab from "../VerticalTabs";

function Widget({ onCloseWidget }) {
  const widget = [
    { title: "Smart Widget", component: <SmartWidget /> },
    { title: "Contacts", component: <Contacts /> },
    { title: "Fundraising", component: <FundRaise /> },
    { title: "Projects", component: <Projects /> },
    { title: "Form", component: <Forms /> },
  ];

  return (
    <WidgetWrapper>
      <Card>
        <VerticalTab tabs={widget} className='vertical-tab__container' verticalWrapper='vertical-tab-wrapper'/>

        <WidgetBtn>
          <div className="btn-wrapper">
            <Button className="widget-btn" onClick={onCloseWidget} auth invert>
              Close
            </Button>
          </div>
        </WidgetBtn>
      </Card>
    </WidgetWrapper>
  );
}

export default Widget;
