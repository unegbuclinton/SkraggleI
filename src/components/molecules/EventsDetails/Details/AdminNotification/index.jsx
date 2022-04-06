import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";
import MailContainer from "components/molecules/mailContainer";
import React, { useState } from "react";

import {
  DetailLabel,
  DetailsSubHeading,
  DetailsText,
  EventWrapper,
  ButtonWrapper,
  InputWrapper,
} from "./styles";

function AdminNotification() {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");
  const [mails, setMails] = useState([]);

  function handleChange(e) {
    setEmail(e.target.value);
  }

  function handleAdd() {
    const newMails = mails.concat({ email });
    setEmail("");
    setMails(newMails);
  }

  function Delete(e) {
    const id = e.currentTarget;
    console.log(id);
    const data = mails.filter((mail) => {
      return mail.id !== Number(id);
    });
    setMails(data);
  }

  return (
    <div>
      <DetailsSubHeading className="notification-heading">
        Admin notifications
      </DetailsSubHeading>
      <EventWrapper>
        <DetailsText className="notification-info">
          Notify the following person by email when a registration occurs
        </DetailsText>
        <DetailLabel>Choose recipients</DetailLabel>
        <div className="choose-recipient-input">
          {mails.map((item, index) => (
            <MailContainer
              key={index}
              id={index}
              Delete={Delete}
              mail={item.email}
            />
          ))}
        </div>
        <DetailsText className="email-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          accumsan, massa ac adipiscing enim bibendum interdum dictum nunc. Sit
          nisl etiam.
        </DetailsText>
        {showInput && (
          <InputWrapper>
            <Input
              className="set-email-input"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={handleChange}
            />
            <ButtonWrapper>
              <Button type="button" onClick={handleAdd} className="save-btn">
                Save
              </Button>
              <Button
                type="button"
                onClick={() => setShowInput(false)}
                className="cancel-btn"
              >
                Cancel
              </Button>
            </ButtonWrapper>
          </InputWrapper>
        )}
        <Button
          type="button"
          onClick={() => setShowInput(true)}
          className="add-email-btn"
        >
          Add an email
        </Button>
      </EventWrapper>
    </div>
  );
}

export default AdminNotification;
