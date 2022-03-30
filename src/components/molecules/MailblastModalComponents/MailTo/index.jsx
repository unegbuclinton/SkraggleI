import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card";
import Input from "components/atoms/Input/Input";
import Switch from "components/atoms/Switch/Switch";
import React from "react";
import { MailToLabel } from "./styles";
import { MailToWrapper } from "./styles";

function MailTo() {
  return (
    <MailToWrapper>
      <Card className="mailto-card">
        <div className="field-container">
          <MailToLabel>Sent To</MailToLabel>
          <Input className="mailto-input" placeholder="Segment" />
        </div>
        <div className="field-container">
          <MailToLabel>Select Segment</MailToLabel>
          <Input className="mailto-input" placeholder="Newsletter" />
        </div>
        <div className="toggle-swicth">
          <p>Exclide Contacts</p>
          <Switch />
        </div>
        <div className="send-email">
          <div className="input-box">
            <input type="checkbox" />
            <p>Send to email addresses with unknown subscription status</p>
          </div>
          <textarea id="email">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            autem facilis dolorum tenetur non quidem rem quo quam quibusdam esse
            .
          </textarea>
        </div>

        <div className="mailto-footer">
          <Button invert auth className="mail-cancel-btn">
            Cancel
          </Button>
          <Button auth className="mail-save-btn">
            Save
          </Button>
        </div>
      </Card>
    </MailToWrapper>
  );
}

export default MailTo;
