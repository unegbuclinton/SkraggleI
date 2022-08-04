import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import ErrorMessage from 'components/atoms/ErrorMessage';
import FileUploadButton from 'components/atoms/FileUploadButton';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { createP2P, viewP2P } from 'features/p2p/p2pSlice';
import { useFormik } from 'formik';
import { DPIconUploadFile } from 'icons';
import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { P2PValidationSchema } from 'validation/Schema';

function P2PFundraiserModalComponent({ onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        toast.success('P2P Created Successfully');
        onClose();
        dispatch(viewP2P());
      });
      navigate('/peer-to-peer');
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

  // const [showFirstModal, setShowFirstModal] = useState(true);

  return (
    <ModalWrapper
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}>
      <Card>
        <h1>CAMPAIGN</h1>
        <SelectDropDown
          placeholder="Campaign Name"
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
          placeholder="Designation"
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
          placeholder="Display Name"
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
          placeholder="First Name"
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
          placeholder="Last Name"
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
          <div>
            <Input
              className="modal-inputs__goals"
              containerClass="modal-inputs__container-input"
              type="number"
              onWheel={() => document.activeElement.blur()}
              placeholder="Enter Goal Amount"
              id="goalAmount"
              name="goalAmount"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.goalAmount}
            />
            {formik.touched.goalAmount && formik.errors.goalAmount ? (
              <ErrorMessage>{formik.errors.goalAmount}</ErrorMessage>
            ) : null}
          </div>

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
          placeholder="Enter Offline Amount"
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
          onWheel={() => document.activeElement.blur()}
          id="offlineDonation"
          name="offlineDonation"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.offlineDonation}
        />
        {formik.touched.offlineDonation && formik.errors.offlineDonation ? (
          <ErrorMessage>{formik.errors.offlineDonation}</ErrorMessage>
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
          placeholder="Enter Date"
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
        <ButtonsContainer>
          <Button
            type="submit"
            className="save-btn"
            auth
            disabled={(!formik.dirty && !isLoading) || (formik.dirty && isLoading)}>
            Create P2P Fundraiser
          </Button>
          <Button onClick={onClose} className="cancel-btn" auth invert>
            Cancel
          </Button>
        </ButtonsContainer>
      </Card>
    </ModalWrapper>
  );
}

export default P2PFundraiserModalComponent;

const ModalWrapper = styled.form`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.8rem;
  padding-bottom: 2.92rem;

  h1 {
    margin-top: 2.4rem;
    margin-bottom: 0.8rem;
    font-weight: ${FONTWEIGHTS.normal};
    font-size: ${FONTSIZES.small};
    line-height: 152.69%;
    color: ${COLORS['grey-200']};
  }

  .text-area {
    resize: none;
    width: 100%;
    height: 14.4rem;
    outline: none;
    padding: 2.4rem;
    border: 1px solid ${COLORS['gray-500']};
  }

  .modal-inputs {
    background-color: white;
    padding-left: 2.083rem;
    width: 100%;
    border: 1px solid ${COLORS['moore-grey']};
    border-radius: 0.5rem;
  }

  .modal-inputs__goals {
    background-color: white;
    padding-left: 2.083rem;
    width: 30.1rem;
    border: 1px solid ${COLORS['moore-grey']};
    border-radius: 0.5rem;
  }

  .modal-inputs__container-input {
    width: 30.1rem;
  }

  .select-goals {
    display: flex;
  }

  .dropdown {
    &__select-campaign {
      width: 100%;
      margin-bottom: 2.4rem;
      border-radius: 0.5rem;
      border: 1px solid ${COLORS['moore-grey']};
      color: ${COLORS['moore-grey']};
    }
    &__select-designation {
      width: 100%;
      margin-bottom: 2.4rem;
      border-radius: 0.5rem;
      border: 1px solid ${COLORS['moore-grey']};
      color: ${COLORS['blue-black']};
    }
    &__select-currency {
      /* padding-top: 2.3rem; */
      /* color: ${COLORS['moore-grey']}; */
      width: 11.8rem;
      height: 6.4rem;
      margin-left: 2.4rem;
      /* border-radius: 0.5rem;
      border: 1px solid ${COLORS['moore-grey']};
      align-items: center; */
    }
  }
  .cancel-btn {
    width: 30.8rem;
    height: 5.1rem;
    border: 1px solid ${COLORS['moore-grey']};
    background-color: ${COLORS.white};
    border-radius: 0.5rem;
    color: ${COLORS['moore-grey']};
    margin-top: 1.6rem;
  }
  .save-btn {
    width: 30.8rem;
    height: 5.1rem;
    border-radius: 0.5rem;
    margin-top: 4rem;
  }

  .display-photos {
    display: flex;
    &__button {
      width: 8.1rem;
      height: 8.1rem;
      margin-right: 1.6rem;
    }
  }

  .img-preview {
    &__profile {
      width: 12.6rem;
      height: 8.1rem;
      border-radius: 0.5rem;
    }
    &__display {
      width: 8.1rem;
      height: 8.1rem;
      margin-right: 1.6rem;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
