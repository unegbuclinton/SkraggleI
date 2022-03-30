import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card";
import Input from "components/atoms/Input/Input";
import React from "react";

import { MailFromWrapper, MailFromLabel } from "./styles";

function MailFrom() {
  return (
    <MailFromWrapper>
      <Card className="mailfrom-card">
        <div>
          <MailFromLabel>Sender email</MailFromLabel>
          <Input className="mailfrom-input" />
        </div>
        <div>
          <MailFromLabel>Sender name</MailFromLabel>
          <Input className="mailfrom-input" />
        </div>
        <div className="bottom-text">
          Use something subscribers will instantly recognize. For example: your
          company name.
        </div>

        <div className="mailfrom-footer">
          <Button invert auth className="mail-cancel-btn">
            Cancel
          </Button>
          <Button auth className="mail-save-btn">
            Save
          </Button>
        </div>
      </Card>
    </MailFromWrapper>
  );
}

export default MailFrom;
