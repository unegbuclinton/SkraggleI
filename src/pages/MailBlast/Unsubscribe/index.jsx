import Card from "components/atoms/Card";
import React from "react";
import { UnsubscribeField } from "./styles";
import { UnsubscribeOption } from "./styles";
import { WarningWrapper } from "./styles";

function UnsubscribeWarning() {
  return (
    <WarningWrapper>
      <Card className="warning-card">
        <h1 className="warning-header">Confirm Unsubscribe</h1>
        <p className="warning-text">
          We are sorry to see you go! Could you please let us know what we can
          do better next time?
        </p>

        <UnsubscribeOption>
          <div className="unsub-option">
            <input type="radio" />
            <span>I no longer want to receive these emails</span>
          </div>
          <div className="unsub-option">
            <input type="radio" />
            <span>I never signed up for this mailing list</span>
          </div>
          <div className="unsub-option">
            <input type="radio" />
            <span>This is not the content I expected</span>
          </div>
          <div className="unsub-option">
            <input type="radio" />
            <span>I receive emails more ofter than I expected</span>
          </div>
          <div className="unsub-option">
            <input type="radio" />
            <span>Others</span>
          </div>
        </UnsubscribeOption>

        <UnsubscribeField>
          
        </UnsubscribeField>
      </Card>
    </WarningWrapper>
  );
}

export default UnsubscribeWarning;
