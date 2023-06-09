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
  const { tagsData } = useSelector((state) => state.contact);

  const { priority, is_subscribed_to_mailblasts, note, solicitation, organization_id } =
    eachContact;
  const adminId = eachContact.id;

  console.log(priority);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      originId: organization_id || '',
      priority: priority || '',
      assignee: '',
      tags: [],
      note: note || '',
      solicitation: solicitation || '',
      is_subscribed_to_mailblasts: is_subscribed_to_mailblasts
    },
    // validationSchema: AdminEditValidationSchema,
    onSubmit: (values) => {
      const body = {
        organization_id: values.originId,
        tags: values.tags,
        is_subscribed_to_mailblasts: values.is_subscribed_to_mailblasts,
        priority: values.priority,
        note: values.note
        // assignee: values.assignee
      };
      dispatch(updateContact({ body: body, id: adminId }));
      onClose();
    }
  });
  const tagOptions = tagsData.map((current) => ({ value: current?.id, label: current?.name }));

  const adminOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
  const emailOptions = [
    { value: true, label: 'Opted In' },
    { value: false, label: 'Opted Out' },
    { value: null, label: 'Unknown' }
  ];
  const priorityOptions = [
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' }
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
              defaultValues={{ label: priority, value: priority }}
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
            options={adminOptions}
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
            id="tags"
            name="tags"
            type={'text'}
            options={tagOptions}
            onChange={(value) => {
              formik.setFieldValue(
                'tags',
                value.map((curr) => curr.value)
              );
            }}
            onBlur={formik.handleBlur}
          />
          {formik.touched.tags && formik.errors.tags ? (
            <ErrorMsg>{formik.errors.tags}</ErrorMsg>
          ) : null}
        </SelectContainer>
        <SelectContainer>
          <Label>Notes</Label>
          <TextArea
            id="note"
            name="note"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.note}
          />
        </SelectContainer>
        <InputContainer>
          <SelectContainer>
            <Label>Solicitation</Label>
            <SelectDropDown
              className="select"
              id="solicitation"
              name="solicitation"
              type={'text'}
              options={adminOptions}
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
              id="is_subscribed_to_mailblasts"
              name="is_subscribed_to_mailblasts"
              type={'text'}
              options={emailOptions}
              value={formik.values.is_subscribed_to_mailblasts}
              onChange={(value) => formik.setFieldValue('is_subscribed_to_mailblasts', value.value)}
              onBlur={formik.handleBlur}
            />
            {formik.touched.is_subscribed_to_mailblasts &&
            formik.errors.is_subscribed_to_mailblasts ? (
              <ErrorMsg>{formik.errors.is_subscribed_to_mailblasts}</ErrorMsg>
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
