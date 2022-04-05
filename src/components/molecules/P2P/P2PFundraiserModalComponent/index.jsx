import { React, useContext } from "react";

import Card from "components/atoms/Card";
import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import Button from "components/atoms/Button/Button";
import data from "utilities/filterData";
import Input from "components/atoms/Input/Input";
import TextArea from "components/atoms/TextArea";
import FileUploadButton from "components/atoms/FileUploadButton";
import { DPIconUploadFile } from "icons";
// import FundraiserLive from "../FundraiserLiveModal";
import MultiStepContext from "../MultiStepModal/MultiStepContext"

import { ModalWrapper, ButtonsContainer } from "./styles";

const P2PModalComponent = ({ onClose, header={header} }) => {
  const { stepOne, setStepOne, next } = useContext(MultiStepContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setStepOne({ stepOne });
    next();
  };

  return (
    <ModalWrapper header="P2P">
      <Card>
        <h1>CAMPAIGN</h1>
        <CustomDropdown data={data} className="dropdown__select-campaign" />
        <h1>DESIGNATION</h1>
        <CustomDropdown data={data} className="dropdown__select-designation" />
        <h1>Fundraiser Display Name</h1>
        <Input className="modal-inputs" type="text" placeholder="Lorem Ipsum" />
        <h1>First Name</h1>
        <Input className="modal-inputs" type="text" placeholder="Lorem Ipsum" />
        <h1>Last Name</h1>
        <Input className="modal-inputs" type="text" placeholder="Lorem Ipsum" />
        <h1>Email</h1>
        <Input
          className="modal-inputs"
          type="text"
          placeholder="Enter Email Address"
        />
        <h1>Goal</h1>
        <div className="select-goals">
          <Input
            className="modal-inputs__goals"
            type="text"
            placeholder="Enter Amount"
          />
          <CustomDropdown data={data} className="dropdown__select-currency" />
        </div>
        <h1>Offline Amount</h1>
        <Input
          className="modal-inputs"
          type="text"
          placeholder="Enter Amount"
        />
        <h1>Offline Donation</h1>
        <Input
          className="modal-inputs"
          type="text"
          placeholder="Enter Amount"
        />
        <h1>Goal Date</h1>
        <Input
          className="modal-inputs"
          type="date"
          placeholder="Enter Amount"
        />
        <h1>Personal Message</h1>
        <TextArea maxLength={120} />
        <h1>Profile Photo</h1>
        <FileUploadButton imgPreview="img-preview__profile">
          <DPIconUploadFile />
        </FileUploadButton>
        <h1>Display Photos</h1>
        <div className="display-photos">
          <FileUploadButton
            className="display-photos__button"
            imgPreview="img-preview__display"
          >
            <DPIconUploadFile />
          </FileUploadButton>
          <FileUploadButton
            className="display-photos__button"
            imgPreview="img-preview__display"
          >
            <DPIconUploadFile />
          </FileUploadButton>
          <FileUploadButton
            className="display-photos__button"
            imgPreview="img-preview__display"
          >
            <DPIconUploadFile />
          </FileUploadButton>
        </div>
        <ButtonsContainer>
          <Button type="button" onClick={handleSubmit} className="save-btn" auth>
            Create P2P Fundraiser
          </Button>
          <Button onClick={onClose} className="cancel-btn" auth invert>
            Cancel
          </Button>
        </ButtonsContainer>
      </Card>
    </ModalWrapper>
  );
};

export default P2PModalComponent;
