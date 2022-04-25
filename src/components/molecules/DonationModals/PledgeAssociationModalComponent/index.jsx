import { React, useState } from "react";

import Card from "components/atoms/Card";
import DropdownComponent from "components/atoms/Dropdown";
import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";
import data from "utilities/filterData";

import { ModalWrapper, ButtonsContainer, ModalInputDescription } from "./styles";

const PledgeAssociateModalComponent = ({ DecrementTab }) => {
  const [selectedContact, setSelectedContact] = useState(
    "Start typing to search"
  );
  const [selectedType, setSelectedType] = useState("Start typing to search");

  
  return (
    <ModalWrapper>
      <Card>
        <h1>Campaign</h1>
        <DropdownComponent
          data={data}
          className="dropdown-contact"
          type=""
          selected={selectedContact}
          setSelected={setSelectedContact}
        />

        <h1>Impact Area</h1>
        <Input className="pledge-modal" type="text" id="name" name="name" placeholder="Start typing to search"/>

        <h1>Soft Credit</h1>
        <DropdownComponent
          data={data}
          className="dropdown-contact"
          type=""
          selected={selectedType}
          setSelected={setSelectedType}
        />

        <h1>Source</h1>
        <Input className="pledge-modal" type="text" id="name" name="name" placeholder="Start typing to search"/>

        <h1>Keywords</h1>
        <Input className="pledge-modal" type="text" id="name" name="name" placeholder="Start typing to search"/>

        <h1>Dedication</h1>
        <Input className="pledge-modal" type="text" id="name" name="name" />

        <h1>Notes</h1>
        <ModalInputDescription
          type="text"
          id="description"
          name="description"
          
        />

        <ButtonsContainer>
          <Button onClick={DecrementTab} className="back-btn" auth invert>
            Back
          </Button>
          <Button type="submit" className="save-btn" auth>
            Save
          </Button>
        </ButtonsContainer>
      </Card>
    </ModalWrapper>
  );
};

export default PledgeAssociateModalComponent;
