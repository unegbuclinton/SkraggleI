import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import ErrorMessage from 'components/atoms/ErrorMessage';
import FileUploadButton from 'components/atoms/FileUploadButton';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
// import TextArea from 'components/atoms/TextArea';
import Modal from 'components/layouts/Modal';
import { createP2p, fetchP2p } from 'features/p2p/p2pSlice';
import { useFormik } from 'formik';
import { DPIconCopyWhite, DPIconUploadFile } from 'icons';
import { React, useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { p2pFundraiserValidationSchema } from 'validation/Schema';
import { ButtonCopy, ButtonsContainer, CopyText, ModalWrapper, SecondModalWrapper } from './styles';

function P2PModalComponent({ onClose, isShown }) {
  const dispatch = useDispatch();
  const [showFirstModal, setShowFirstModal] = useState(true);
  const textAreaRef = useRef(null);

  const copyToClipboard = useCallback((e) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    alert('Text Copied');
  }, []);
  const campaignOptions = [
    { value: 'Location', label: 'Location' },
    { value: 'Renovation', label: 'Renovation' },
    { value: 'Charity', label: 'Charity' }
  ];
  const designationOptions = [
    { value: 'One-time', label: 'One-time' },
    { value: 'Recurring', label: 'Recurring' },
    { value: 'Infinite', label: 'Infinite' }
  ];
  const currencyOptions = [
    { value: 'USD', label: 'USD' },
    { value: 'NGN', label: 'NGN' },
    { value: 'INR', label: 'INR' }
  ];
  const formik = useFormik({
    initialValues: {
      campaign: 'Location',
      designation: 'Infinite',
      displayName: '',
      firstName: '',
      lastName: '',
      email: '',
      goalAmount: '',
      offlineAmount: '',
      currency: 'NGN',
      offlineDonation: '',
      goalDate: '',
      personalMessage: ''
    },
    validationSchema: p2pFundraiserValidationSchema,

    onSubmit: (values) => {
      const body = {
        designation: values.designation,
        campaign: values.campaign,
        displayName: values.displayName,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        goalAmount: values.goalAmount,
        offlineAmount: values.offlineAmount,
        offlineDonation: values.offlineDonation,
        goalDate: values.goalDate,
        currency: values.currency,
        personalMessage: values.personalMessage
      };

      dispatch(createP2p(body));
      setShowFirstModal(false);
      dispatch(fetchP2p());
    }
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowFirstModal(false);
  //   dispatch(createP2p());
  //   console.log('p2p created');
  // };

  return showFirstModal ? (
    <Modal
      header="Create P2P Fundraiser"
      onClose={() => setShowFirstModal(false)}
      isShown={isShown}
      hide={onClose}>
      <ModalWrapper onSubmit={formik.handleSubmit}>
        <Card>
          <h1>CAMPAIGN</h1>
          <SelectDropDown
            id="campaign"
            type={'text'}
            options={campaignOptions}
            value={formik.values.campaign}
            onChange={(value) => formik.setFieldValue('campaign', value.value)}
            onBlur={formik.handleBlur}
          />
          <h1>DESIGNATION</h1>
          <SelectDropDown
            id="designation"
            type={'text'}
            options={designationOptions}
            value={formik.values.designation}
            onChange={(value) => formik.setFieldValue('designation', value.value)}
            onBlur={formik.handleBlur}
          />
          <h1>Fundraiser Display Name</h1>
          <Input
            className="modal-inputs"
            id="displayName"
            name="displayName"
            type="text"
            placeholder="Lorem Ipsum"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.displayName}
          />
          {formik.touched.displayName && formik.errors.displayName ? (
            <ErrorMessage>{formik.errors.displayName}</ErrorMessage>
          ) : null}
          <h1>First Name</h1>
          <Input
            className="modal-inputs"
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Lorem Ipsum"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <ErrorMessage>{formik.errors.firstName}</ErrorMessage>
          ) : null}
          <h1>Last Name</h1>
          <Input
            className="modal-inputs"
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Lorem Ipsum"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <ErrorMessage>{formik.errors.lastName}</ErrorMessage>
          ) : null}
          <h1>Email</h1>
          <Input
            className="modal-inputs"
            id="email"
            name="email"
            type="text"
            placeholder="Enter Email Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
          <h1>Goal</h1>
          <div className="select-goals">
            <Input
              className="modal-inputs__goals"
              containerClass="modal-inputs__container-input"
              id="goalAmount"
              name="goalAmount"
              type="text"
              placeholder="Enter Amount"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.goalAmount}
            />
            <SelectDropDown
              id="currency"
              type={'text'}
              options={currencyOptions}
              value={formik.values.currency}
              onChange={(value) => formik.setFieldValue('currency', value.value)}
              onBlur={formik.handleBlur}
            />
            {formik.touched.goalAmount && formik.errors.goalAmount ? (
              <ErrorMessage>{formik.errors.goalAmount}</ErrorMessage>
            ) : null}
          </div>
          <h1>Offline Amount</h1>
          <Input
            className="modal-inputs"
            id="offlineAmount"
            name="offlineAmount"
            type="text"
            placeholder="Enter Amount"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.offlineAmount}
          />
          {formik.touched.offlineAmount && formik.errors.offlineAmount ? (
            <ErrorMessage>{formik.errors.offlineAmount}</ErrorMessage>
          ) : null}
          <h1>Offline Donation</h1>
          <Input
            className="modal-inputs"
            id="offlineDonation"
            name="offlineDonation"
            type="text"
            placeholder="Enter Amount"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.offlineDonation}
          />
          {formik.touched.offlineDonation && formik.errors.offlineDonation ? (
            <ErrorMessage>{formik.errors.offlineDonation}</ErrorMessage>
          ) : null}
          <h1>Goal Date</h1>
          <Input
            className="modal-inputs"
            id="goalDate"
            type="date"
            placeholder="Enter Amount"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.goalDate}
          />
          <h1>Personal Message</h1>
          {/* <TextArea
            id="personalMessage"
            name="personalMessage"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.personalMessage}
            maxLength={120}
          /> */}
          <textarea
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.personalMessage}
            id="personalMessage"
            name="personalMessage"
          />
          {formik.touched.personalMessage && formik.errors.personalMessage ? (
            <ErrorMessage>{formik.errors.personalMessage}</ErrorMessage>
          ) : null}
          <h1>Profile Photo</h1>
          <FileUploadButton imgPreview="img-preview__profile">
            <DPIconUploadFile />
          </FileUploadButton>
          <h1>Display Photos</h1>
          <div className="display-photos">
            <FileUploadButton className="display-photos__button" imgPreview="img-preview__display">
              <DPIconUploadFile />
            </FileUploadButton>
            <FileUploadButton className="display-photos__button" imgPreview="img-preview__display">
              <DPIconUploadFile />
            </FileUploadButton>
            <FileUploadButton className="display-photos__button" imgPreview="img-preview__display">
              <DPIconUploadFile />
            </FileUploadButton>
          </div>
          <ButtonsContainer>
            <Button type="submit" className="save-btn" auth>
              + Create P2P Fundraiser
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
      showClose={onClose}>
      <SecondModalWrapper onClose={onClose}>
        <Card>
          <h1>Use this link to direct donors to your new P2P fundraiser</h1>
          <div className="copy__textarea">
            <CopyText
              ref={textAreaRef}
              value="Lorem ipsum dolor sit amet, consectetur adipisci..."
            />
            <ButtonCopy className="preview__copy-button" onClick={copyToClipboard}>
              <DPIconCopyWhite className="preview__icon-copy" />
              Copy
            </ButtonCopy>
          </div>
        </Card>
      </SecondModalWrapper>
    </Modal>
  );
}

export default P2PModalComponent;
