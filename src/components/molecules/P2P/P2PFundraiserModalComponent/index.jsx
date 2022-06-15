import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import ErrorMessage from 'components/atoms/ErrorMessage';
import FileUploadButton from 'components/atoms/FileUploadButton';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
// import TextArea from 'components/atoms/TextArea';
import Modal from 'components/layouts/Modal';
import { createP2P, viewP2P } from 'features/p2p/p2pSlice';
import { useFormik } from 'formik';
import { DPIconCopyWhite, DPIconUploadFile } from 'icons';
import { React, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { P2PValidationSchema } from 'validation/Schema';
import { ButtonCopy, ButtonsContainer, CopyText, ModalWrapper, SecondModalWrapper } from './styles';

function P2PModalComponent({ onClose, isShown }) {
  const dispatch = useDispatch();
  const { campaigns } = useSelector((state) => state.campaign);

  const campaign = campaigns?.map((current) => ({ value: current?.id, label: current?.name }));

  const { isLoading } = useSelector((state) => state.p2p);
  const formik = useFormik({
    initialValues: {
      campaignName: '',
      designation: '',
      fundraiserName: '',
      firstName: '',
      lastName: '',
      email: '',
      goalAmount: '',
      goalCurrency: '',
      offlineAmount: '',
      offlineDonation: '',
      goalDate: '',
      personalMessage: ''
    },
    validationSchema: P2PValidationSchema,
    onSubmit: (values) => {
      const body = {
        campaign_id: values.campaignName,
        designation: values.designation,
        fundraiser_display_name: values.fundraiserName,
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        goal: values.goalAmount,
        goal_currency: values.goalCurrency,
        offline_amount: values.offlineAmount,
        offline_donation: values.offlineDonation,
        goal_date: values.goalDate,
        personal_message: values.personalMessage
      };

      dispatch(createP2P(body)).then(() => {
        toast.success('Contact Created Successfully');
        onClose();
        dispatch(viewP2P());
      });
    }
  });

  const emailSub = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];

  const currency = [
    { value: 'USD', label: 'USD' },
    { value: 'PKR', label: 'PKR' },
    { value: 'CYN', label: 'CYN' }
  ];

  const [showFirstModal, setShowFirstModal] = useState(true);
  const textArea = useState(null);

  const copyToClipboard = useCallback(() => {
    const text = textArea.current.value;
    navigator.clipboard.writeText(text);
    alert('Text Copied');
  }, []);
  // const campaignOptions = [
  //   { value: 'Location', label: 'Location' },
  //   { value: 'Renovation', label: 'Renovation' },
  //   { value: 'Charity', label: 'Charity' }
  // ];
  // const designationOptions = [
  //   { value: 'One-time', label: 'One-time' },
  //   { value: 'Recurring', label: 'Recurring' },
  //   { value: 'Infinite', label: 'Infinite' }
  // ];
  // const currencyOptions = [
  //   { value: 'USD', label: 'USD' },
  //   { value: 'NGN', label: 'NGN' },
  //   { value: 'INR', label: 'INR' }
  // ];

  return showFirstModal ? (
    <Modal
      header="Create P2P Fundraiser"
      onClose={() => setShowFirstModal(false)}
      isShown={isShown}
      hide={onClose}>
      <ModalWrapper
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}>
        <Card>
          <h1>CAMPAIGN</h1>
          <SelectDropDown
            placeholder={'Lorem Ipsum'}
            id="campaignName"
            name="campaignName"
            type={'text'}
            options={campaign}
            value={formik.values.campaignName}
            onChange={(value) => formik.setFieldValue('campaignName', value.value)}
            onBlur={formik.handleBlur}
          />
          {formik.touched.campaignName && formik.errors.campaignName ? (
            <ErrorMessage>{formik.errors.campaignName}</ErrorMessage>
          ) : null}

          <h1>DESIGNATION</h1>
          <SelectDropDown
            placeholder={'Lorem Ipsum'}
            id="designation"
            name="designation"
            type={'text'}
            options={emailSub}
            value={formik.values.designation}
            onChange={(value) => formik.setFieldValue('designation', value.value)}
            onBlur={formik.handleBlur}
          />
          {formik.touched.designation && formik.errors.designation ? (
            <ErrorMessage>{formik.errors.designation}</ErrorMessage>
          ) : null}

          <h1>Fundraiser Display Name</h1>
          <Input
            className="modal-inputs"
            type="text"
            placeholder="Lorem Ipsum"
            id="fundraiserName"
            name="fundraiserName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fundraiserName}
          />
          {formik.touched.fundraiserName && formik.errors.fundraiserName ? (
            <ErrorMessage>{formik.errors.fundraiserName}</ErrorMessage>
          ) : null}

          <h1>First Name</h1>
          <Input
            className="modal-inputs"
            type="text"
            placeholder="Lorem Ipsum"
            id="firstName"
            name="firstName"
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
            type="text"
            placeholder="Lorem Ipsum"
            id="lastName"
            name="lastName"
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
            type="text"
            placeholder="Enter Email Address"
            id="email"
            name="email"
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
              type="number"
              placeholder="Enter Amount"
              id="goalAmount"
              name="goalAmount"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.goalAmount}
            />
            {formik.touched.goalAmount && formik.errors.goalAmount ? (
              <ErrorMessage>{formik.errors.goalAmount}</ErrorMessage>
            ) : null}

            <SelectDropDown
              className="dropdown__select-currency"
              placeholder={'Select Currency'}
              id="goalCurrency"
              name="goalCurrency"
              type={'text'}
              options={currency}
              value={formik.values.goalCurrency}
              onChange={(value) => formik.setFieldValue('goalCurrency', value.value)}
              onBlur={formik.handleBlur}
            />
            {formik.touched.goalCurrency && formik.errors.goalCurrency ? (
              <ErrorMessage>{formik.errors.goalCurrency}</ErrorMessage>
            ) : null}
          </div>

          <h1>Offline Amount</h1>
          <Input
            className="modal-inputs"
            type="number"
            placeholder="Enter Amount"
            id="offlineAmount"
            name="offlineAmount"
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
            type="number"
            placeholder="Enter Amount"
            id="offlineDonation"
            name="offlineDonation"
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
            type="date"
            placeholder="Enter Amount"
            id="goalDate"
            name="goalDate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.goalDate}
          />
          {formik.touched.goalDate && formik.errors.goalDate ? (
            <ErrorMessage>{formik.errors.goalDate}</ErrorMessage>
          ) : null}

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
            className="text-area"
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
            <Button type="submit" className="save-btn" auth loading={isLoading}>
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
      showClose={onClose}>
      <SecondModalWrapper onClose={onClose}>
        <Card>
          <h1>Use this link to direct donors to your new P2P fundraiser</h1>
          <div className="copy__textarea">
            <CopyText ref={textArea} value="Lorem ipsum dolor sit amet, consectetur adipisci..." />
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
