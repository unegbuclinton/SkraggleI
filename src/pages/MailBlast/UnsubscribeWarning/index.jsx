import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card";
import RadioGroup from "components/atoms/RadioGroup";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UnsubscribeModal from "../MailblasModals/Unsubscribe";
import { UnsubscribeField } from "./styles";
import { UnsubscribeOption } from "./styles";
import { WarningWrapper } from "./styles";

function UnsubscribeWarning() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  return (
    <WarningWrapper>
      <Card className="warning-card">
        <h1 className="warning-header">Confirm Unsubscribe</h1>
        <p className="warning-text">
          We are sorry to see you go! Could you please let us know what we can
          do better next time?
        </p>

        <UnsubscribeOption>
          <RadioGroup
            radioData={[
              {
                labelText: "I no longer want to receive these emails",
                value: 1,
              },
              {
                labelText: "I never signed up for this mailing list",
                value: 2,
              },
              {
                labelText: "This is not the content I expected",
                value: 3,
              },
              {
                labelText: "I receive emails more ofter than I expected",
                value: 4,
              },
              {
                labelText: "Others",
                value: 5,
              },
            ]}
          />
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
          <Button
            className="unsubscription-footer__back"
            invert
            onClick={() => navigate("/mail-blasts")}
          >
            Back
          </Button>
          <Button
            className="unsubscription-footer__confirm"
            auth
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Confirm
          </Button>
          {openModal && (
            <UnsubscribeModal
              isShown={openModal}
              onCloseModal={() => {
                setOpenModal(false);
              }}
            />
          )}
        </div>
      </Card>
    </WarningWrapper>
  );
}

export default UnsubscribeWarning;
