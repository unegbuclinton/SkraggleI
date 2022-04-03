import Switch from "components/atoms/Switch/Switch";
import React from "react";
import {
  DetailLabel,
  DetailsText,
  SectionWrapper,
  SwitchLabel,
  SwitchWrapper,
} from "./styles";

function RecipientBody() {
  return (
    <SectionWrapper>
      <div className="recipient-container">
        <DetailLabel>Receipt Body</DetailLabel>
        <div className="recipient-body"></div>
      </div>
      <DetailsText className="recipient-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        accumsan, massa ac adipiscing enim bibendum interdum dictum nunc. Sit
        nisl etiam.
      </DetailsText>
      <SwitchWrapper>
        <SwitchLabel>Include PDF receipt</SwitchLabel>
        <Switch />
      </SwitchWrapper>
    </SectionWrapper>
  );
}

export default RecipientBody;
