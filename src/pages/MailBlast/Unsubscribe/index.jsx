import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card";
import React, { useState } from "react";
import UnsubscribeModal from "../MailblasModals/Unsubscribe";
import { UnsubscribeField } from "./styles";
import { UnsubscribeOption } from "./styles";
import { WarningWrapper } from "./styles";

function UnsubscribeWarning({ isShown, onCloseModal }) {
  const [openModal, settOpenModal] = useState(false);

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
          <label className="feedback-text"> Additional FeedBack</label>

          <textarea name="text" id="feeback-field">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde
            natus eligendi. Alias harum expedita fuga libero. Dignissimos minima
            eligendi delectus qui. Obcaecati eos incidunt numquam fugit
            consequatur itaque sequi, beatae omnis, similique, quod eius
            voluptatibus animi culpa eveniet alias dolores. Sit expedita aliquam
            natus odit nisi adipisci dolore magni!
          </textarea>
        </UnsubscribeField>

        <div className="unsubscription-footer">
          <Button className="unsubscription-footer__back" invert>
            Back
          </Button>
          <Button
            className="unsubscription-footer__confirm"
            auth
            onClick={() => {
              settOpenModal(true);
            }}
          >
            Confirm
          </Button>
          {openModal && (
            <UnsubscribeModal
              isShown={openModal}
              onCloseModal={()=>{settOpenModal(false)}}
            />
          )}
        </div>
      </Card>
    </WarningWrapper>
  );
}

export default UnsubscribeWarning;
