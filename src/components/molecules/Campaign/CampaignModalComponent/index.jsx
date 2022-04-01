import React from "react";

import Card from "components/atoms/Card";
import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";
import TextArea from "components/atoms/TextArea";
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
        <CustomDropdown
          data={data}
          className="dropdown-followers"
        ></CustomDropdown>
        <ButtonsContainer>
          <Button onClick={onClose} className="cancel-btn" auth invert>Cancel</Button>
          <Button type="submit" className="save-btn" auth>Save</Button>
        </ButtonsContainer>
      </Card>
    </ModalWrapper>
  );
};

export default CampaignModalComponent;
