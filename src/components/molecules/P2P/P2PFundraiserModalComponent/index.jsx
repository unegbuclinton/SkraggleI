import { React, useRef, useState } from "react";
import Modal from "components/layouts/Modal";
import Card from "components/atoms/Card";
import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import Button from "components/atoms/Button/Button";
import data from "utilities/filterData";
import Input from "components/atoms/Input/Input";
import TextArea from "components/atoms/TextArea";
import FileUploadButton from "components/atoms/FileUploadButton";
import DropdownComponent from "components/atoms/Dropdown";
import { DPIconCopyWhite, DPIconUploadFile } from "icons";

import {
  ModalWrapper,
  ButtonsContainer,
  SecondModalWrapper,
  CopyText,
  ButtonCopy,
} from "./styles";

const P2PModalComponent = ({ onClose, isShown }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowFirstModal(false);
  };

  const [showFirstModal, setShowFirstModal] = useState(true);
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    alert("Text Copied");
  }

  return (
    <>
      {showFirstModal ? (
        <Modal
          header="Create P2P Fundraiser"
          onClose={() => setShowFirstModal(false)}
          isShown={isShown}
          hide={onClose}
        >
          <ModalWrapper>
            <Card>
              <h1>CAMPAIGN</h1>
              <DropdownComponent
                data={data}
                className="dropdown__select-campaign"
              />
              <h1>DESIGNATION</h1>
              <DropdownComponent
                data={data}
                className="dropdown__select-designation"
              />
              <h1>Fundraiser Display Name</h1>
              <Input
                className="modal-inputs"
                type="text"
                placeholder="Lorem Ipsum"
              />
              <h1>First Name</h1>
              <Input
                className="modal-inputs"
                type="text"
                placeholder="Lorem Ipsum"
              />
              <h1>Last Name</h1>
              <Input
                className="modal-inputs"
                type="text"
                placeholder="Lorem Ipsum"
              />
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
                <CustomDropdown
                  data={data}
                  className="dropdown__select-currency"
                />
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
                <Button
                  type="button"
                  onClick={handleSubmit}
                  className="save-btn"
                  auth
                >
                  Create P2P Fundraiser
                </Button>
                <Button onClick={onClose} className="cancel-btn" auth invert>
                  Cancel
                </Button>
              </ButtonsContainer>
            </Card>
          </ModalWrapper>
        </Modal>
      ) : (
        <Modal
          header="Your P2P fundraiser is live!"
          isShown={isShown}
          hide={onClose}
          showClose={onClose}
        >
          <SecondModalWrapper onClose={onClose}>
            <Card>
              <h1>Use this link to direct donors to your new P2P fundraiser</h1>
              <div className="copy__textarea">
                <CopyText
                  ref={textAreaRef}
                  value="Lorem ipsum dolor sit amet, consectetur adipisci..."
                />
                <ButtonCopy
                  className="preview__copy-button"
                  onClick={copyToClipboard}
                >
                  <DPIconCopyWhite className="preview__icon-copy" />
                  Copy
                </ButtonCopy>
              </div>
            </Card>
          </SecondModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default P2PModalComponent;
