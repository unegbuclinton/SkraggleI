import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES } from 'constants/font-spec';
import { createForm, getAllForm } from 'features/forms/formsSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

function CreateFormComponent({ onClose }) {
  const { campaigns } = useSelector((state) => state.campaign);

  const formTypeOptions = [
    { value: 'Donation', label: 'Donation' },
    { value: 'Revenue', label: 'Revenue' },
    { value: 'Membership', label: 'Membership' },
    { value: 'Subscription', label: 'Subscription' },
    { value: 'Custom', label: 'Custom' }
  ];

  const campaignOptions = campaigns.map((current) => ({
    value: current?.id,
    label: current?.name
  }));

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      type: '',
      formName: '',
      camp: '',
      description: '',
      assignee: '',
      followers: ''
    },
    onSubmit: (values) => {
      const body = {
        name: values.formName,
        type: values.type,
        campaign_id: values.camp
      };

      dispatch(createForm(body)).then(() => {
        dispatch(getAllForm());
        toast.success('Created Form Successfully');
        onClose();
      });
      navigate('/forms');
    }
  });
  return (
    <CreateFormWrapper onSubmit={formik.handleSubmit}>
      <Card className="form-card">
        <CreateFormContainer>
          <CreateFormLabel>Form Name</CreateFormLabel>
          <Input
            placeholder="Name"
            autoWidth
            className="form-input"
            id="formName"
            name="formName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.formName}
          />
        </CreateFormContainer>
        <CreateFormContainer>
          <CreateFormLabel>Form Type</CreateFormLabel>
          <SelectDropDown
            id="type"
            name="type"
            options={formTypeOptions}
            value={formik.values.type}
            onChange={(value) => formik.setFieldValue('type', value.value)}
            onBlur={formik.handleBlur}
          />
        </CreateFormContainer>
        <CreateFormContainer>
          <CreateFormLabel>Campaign</CreateFormLabel>
          <SelectDropDown
            id="camp"
            name="camp"
            options={campaignOptions}
            value={formik.values.camp}
            onChange={(value) => formik.setFieldValue('camp', value.value)}
            onBlur={formik.handleBlur}
          />
        </CreateFormContainer>
        <CreateFormContainer>
          <CreateFormLabel>Description</CreateFormLabel>
          <CreateFormTextArea
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            id="description"
            name="description"
          />
        </CreateFormContainer>
        <CreateFormContainer>
          <CreateFormLabel>Assignee</CreateFormLabel>
          <SelectDropDown
            id="assignee"
            name="assignee"
            options={formTypeOptions}
            value={formik.values.assignee}
            onChange={(value) => formik.setFieldValue('assignee', value.value)}
            onBlur={formik.handleBlur}
          />
        </CreateFormContainer>
        <CreateFormContainer>
          <CreateFormLabel>Followers</CreateFormLabel>
          <SelectDropDown
            id="followers"
            name="followers"
            options={formTypeOptions}
            value={formik.values.followers}
            onChange={(value) => formik.setFieldValue('followers', value.value)}
            onBlur={formik.handleBlur}
          />
        </CreateFormContainer>
        <CreateFormFooter>
          <Button auth invert className="form-cancel__btn" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" auth className="form-save__btn">
            Save
          </Button>
        </CreateFormFooter>
      </Card>
    </CreateFormWrapper>
  );
}

export default CreateFormComponent;

const CreateFormWrapper = styled.form`
  .form-card {
    padding: 3.1rem 2.1rem 2.1rem 2.4rem;
  }
`;
const CreateFormLabel = styled.label`
  margin-bottom: 0.8rem;
  font-size: ${FONTSIZES.xsmall};
  color: ${COLORS['grey-200']};
`;
const CreateFormContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;

  .form-input {
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
  }
`;
const CreateFormTextArea = styled.textarea`
  resize: none;
  outline: none;
  height: 14.4rem;
  border: 1px solid ${COLORS['gray-500']};
  padding: 2rem;
`;

const CreateFormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;

  .form-cancel__btn {
    width: 10.7rem;
    height: 5rem;
  }

  .form-save__btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;
