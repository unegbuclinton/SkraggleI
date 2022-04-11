import React from "react";

import Card from "components/atoms/Card";
import DropdownComponent from "components/atoms/Dropdown";
import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";
import data from "utilities/filterData";

import {
  ModalWrapper,
  ModalInputDescription,
  ButtonsContainer,
} from "./styles";

const CampaignModalComponent = ({ onClose }) => {
  return (
    <ModalWrapper>
      <Card>
        <h1>CAMPAIGN NAME</h1>
        <Input
          className="campaign-modal"
          type="text"
          placeholder="Lorem Ipsum"
        />
        <h1>DESCRIPTION</h1>
        <ModalInputDescription type="text" placeholder="Lorem Ipsum" />
        <h1>CAMPAIGN FUNDRAISING GOALS</h1>
        <Input
          className="campaign-modal"
          type="text"
          placeholder="Lorem Ipsum"
        />
        <h1>FOLLOWERS</h1>
        <DropdownComponent
          data={data}
          className="dropdown-followers"
        />
        <ButtonsContainer>
          <Button onClick={onClose} className="cancel-btn" auth invert>Cancel</Button>
          <Button type="submit" className="save-btn" auth>Save</Button>
        </ButtonsContainer>
      </Card>
    </ModalWrapper>
  );
};

export default CampaignModalComponent;
