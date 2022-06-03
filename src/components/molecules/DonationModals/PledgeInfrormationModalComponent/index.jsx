import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import DropdownComponent from 'components/atoms/Dropdown';
import FileUploadButton from 'components/atoms/FileUploadButton';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { DPIconDelete, DPIconUploadFile } from 'icons';
import { React, useState } from 'react';
import { useSelector } from 'react-redux';
import data from 'utilities/filterData';
import { ButtonsContainer, InstallmentWrapper, ModalWrapper } from './styles';

const PledgeInfoModalComponent = ({ onClose, IncrementTab, ...rest }) => {
  console.log({ ...rest });

  const [selectedType, setSelectedType] = useState('Donation');
  const [showAddInstallment, setShowAddInstallment] = useState(false);
  const [btnAddInstallment, setBtnAddInstallment] = useState(true);

  function showInstallment(e) {
    e.preventDefault();
    setBtnAddInstallment(false);
    setShowAddInstallment(true);
  }
  const { contactData } = useSelector((state) => state.contact);
  const contactOptions = contactData.map((current) => ({
    value: current?.id,
    label: current?.first_name
  }));
  return (
    <ModalWrapper>
      <Card>
        <h1>Contact</h1>
        <SelectDropDown
          options={contactOptions}
          id="followers"
          name="followers"
          type={'text'}
          // onChange={(value) => {
          //   formik.setFieldValue(
          //     'followers',
          //     value.map((curr) => curr.value)
          //   );
          // }}
        />

        <h1>Pledge Name</h1>
        <Input className="pledge-modal" type="text" id="name" name="name" />

        <h1>Full Value of Donation</h1>
        <Input className="pledge-modal" type="text" id="name" name="name" />

        <h1>Pledge Type</h1>
        <DropdownComponent
          data={data}
          className="dropdown-contact"
          type=""
          selected={selectedType}
          setSelected={setSelectedType}
        />

        <h1>Start Date</h1>
        <Input className="modal-inputs" type="date" placeholder="Enter Amount" />

        <h1>End Date</h1>
        <Input className="modal-inputs" type="date" placeholder="Enter Amount" />
        <h1>Attachments</h1>
        <FileUploadButton imgPreview="img-preview">
          <DPIconUploadFile />
        </FileUploadButton>

        <h1>Installments</h1>
        {btnAddInstallment && (
          <Button
            type="submit"
            className="installment-btn__add"
            onClick={(e) => {
              e.preventDefault();
            }}>
            Add Installment
          </Button>
        )}

        {showAddInstallment && (
          <InstallmentWrapper>
            <div className="installments">
              <Input
                className="installments-date"
                containerClass="input-container"
                type="text"
                id="name"
                name="name"
                placeholder="Expected Date"
              />
              <Input
                className="installments-amount"
                containerClass="input-container"
                type="text"
                id="name"
                name="name"
                placeholder="Amount"
              />
              <DPIconDelete className="icon-delete" />
            </div>
            <div className="installments">
              <Input
                className="installments-date"
                containerClass="input-container"
                type="text"
                id="name"
                name="name"
                placeholder="Expected Date"
              />
              <Input
                className="installments-amount"
                containerClass="input-container"
                type="text"
                id="name"
                name="name"
                placeholder="Amount"
              />
              <DPIconDelete className="icon-delete" />
            </div>
            <div className="installments">
              <Input
                className="installments-date"
                containerClass="input-container"
                type="text"
                id="name"
                name="name"
                placeholder="Expected Date"
              />
              <Input
                className="installments-amount"
                containerClass="input-container"
                type="text"
                id="name"
                name="name"
                placeholder="Amount"
              />
              <DPIconDelete className="icon-delete" />
            </div>
            <Button
              type="submit"
              className="installment-btn__pink"
              onClick={(e) => {
                e.preventDefault();
              }}>
              Add Installment
            </Button>
          </InstallmentWrapper>
        )}

        <h1>OR</h1>

        <h1>Payment Interval</h1>
        <div className="calculate-installment">
          <DropdownComponent
            data={data}
            className="dropdown-installment"
            type=""
            selected={selectedType}
            setSelected={setSelectedType}
          />
          <Button type="submit" className="installment-btn__calculate" onClick={showInstallment}>
            Calculate Installment
          </Button>
        </div>

        <ButtonsContainer>
          <Button onClick={onClose} className="back-btn" auth invert>
            Back
          </Button>
          <Button type="button" className="save-btn" auth onClick={IncrementTab}>
            Next
          </Button>
        </ButtonsContainer>
      </Card>
    </ModalWrapper>
  );
};

export default PledgeInfoModalComponent;
