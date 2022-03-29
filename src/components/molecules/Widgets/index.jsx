import React, { useState } from "react";
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
  WidgetContentWrapper,
  WidgetButton,
} from "./styles";

function Widget({ onCloseWidget }) {
  const [activeWidget, setActiveWidget] = useState(0);

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
        <WidgetContentWrapper>
          <div className="btn-wrapper">
            {widget.map(({ title }, index) => (
              <WidgetButton
                key={index}
                active={activeWidget === index}
                onClick={() => setActiveWidget(index)}
              >
                {title}
              </WidgetButton>
            ))}
          </div>

          <div> {widget && widget[activeWidget]?.component}</div>
        </WidgetContentWrapper>

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
