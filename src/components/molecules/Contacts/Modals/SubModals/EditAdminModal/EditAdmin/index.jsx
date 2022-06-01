import Button from 'components/atoms/Button/Button';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import TextArea from 'components/atoms/TextArea';
import { updateContact } from 'features/contact/contactSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { AdminEditValidationSchema } from 'validation/Schema';
import {
  ButtonContainer,
  ErrorMsg,
  InputContainer,
  Label,
  ModalForm,
  ModalWrapper,
  SelectContainer
} from './styles';

function EditAmin({ onClose }) {
  const { eachContact } = useSelector((state) => state.contact);
  const adminId = eachContact.id;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      originId: '',
      priority: '',
      assignee: '',
      tag: '',
      note: '',
      solicitation: '',
      emailSubscriptionStatus: ''
    },
    // validationSchema: AdminEditValidationSchema,
    onSubmit: (values) => {
      const body = {
        organization_id: values.originId,
        tag: values.tag,
        email_subscription_status: values.emailSubscriptionStatus
      };
      dispatch(updateContact({ body: body, id: adminId }));
      onClose();
    }
  });
  const priorityOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
  return (
    <ModalWrapper>
      <ModalForm onSubmit={formik.handleSubmit}>
        <InputContainer>
          <div>
            <Label>Origin ID</Label>
            <Input
              className="input"
              id="originId"
              name="originId"
              type="text"
              placeholder="Enter Origin Id"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.originId}
            />
            {formik.touched.originId && formik.errors.originId ? (
              <ErrorMsg>{formik.errors.originId}</ErrorMsg>
            ) : null}
          </div>
          <div>
            <Label>Priority</Label>
            <SelectDropDown
              className="select"
              id="priority"
              name="priority"
              type={'text'}
              options={priorityOptions}
              value={formik.values.priority}
              onChange={(value) => formik.setFieldValue('priority', value.value)}
              onBlur={formik.handleBlur}
            />
            {formik.touched.priority && formik.errors.priority ? (
              <ErrorMsg>{formik.errors.priority}</ErrorMsg>
            ) : null}
          </div>
        </InputContainer>
        <SelectContainer>
          <Label>Assignee</Label>
          <SelectDropDown
            id="assignee"
            name="assignee"
            type={'text'}
            options={priorityOptions}
            value={formik.values.assignee}
            onChange={(value) => formik.setFieldValue('assignee', value.value)}
            onBlur={formik.handleBlur}
          />
          {formik.touched.assignee && formik.errors.assignee ? (
            <ErrorMsg>{formik.errors.assignee}</ErrorMsg>
          ) : null}
        </SelectContainer>
        <SelectContainer>
          <Label>Tag</Label>
          <SelectDropDown
            isMulti={true}
            id="tag"
            name="tag"
            type={'text'}
            options={priorityOptions}
            value={formik.values.tag}
            onChange={(value) => formik.setFieldValue('tag', value.value)}
            onBlur={formik.handleBlur}
          />
          {formik.touched.tag && formik.errors.tag ? (
            <ErrorMsg>{formik.errors.tag}</ErrorMsg>
          ) : null}
        </SelectContainer>
        <SelectContainer>
          <Label>Notes</Label>
          <TextArea />
        </SelectContainer>
        <InputContainer>
          <SelectContainer>
            <Label>Solicitation</Label>
            <SelectDropDown
              className="select"
              id="solicitation"
              name="solicitation"
              type={'text'}
              options={priorityOptions}
              value={formik.values.solicitation}
              onChange={(value) => formik.setFieldValue('solicitation', value.value)}
              onBlur={formik.handleBlur}
            />
            {formik.touched.solicitation && formik.errors.solicitation ? (
              <ErrorMsg>{formik.errors.solicitation}</ErrorMsg>
            ) : null}
          </SelectContainer>
          <SelectContainer>
            <Label>Email Subscription Status</Label>
            <SelectDropDown
              className="select"
              id="emailSubscriptionStatus"
              name="emailSubscriptionStatus"
              type={'text'}
              options={priorityOptions}
              value={formik.values.emailSubscriptionStatus}
              onChange={(value) => formik.setFieldValue('emailSubscriptionStatus', value.value)}
              onBlur={formik.handleBlur}
            />
            {formik.touched.emailSubscriptionStatus && formik.errors.emailSubscriptionStatus ? (
              <ErrorMsg>{formik.errors.emailSubscriptionStatus}</ErrorMsg>
            ) : null}
          </SelectContainer>
        </InputContainer>
        <ButtonContainer>
          <Button type="button" onClick={onClose} className="cancel-btn" auth invert>
            Cancel
          </Button>
          <Button type="submit" className="save-btn">
            Save
          </Button>
        </ButtonContainer>
      </ModalForm>
    </ModalWrapper>
  );
}

export default EditAmin;
