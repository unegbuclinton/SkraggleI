import Button from 'components/atoms/Button/Button';
import FileUploadButton from 'components/atoms/FileUploadButton';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { createTodo, eachTodo } from 'features/contact/contactSlice';
import { useFormik } from 'formik';
import { DPIconUploadFile } from 'icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { CreateTodoValidationSchema } from 'validation/Schema';
import {
  ButtonContainer,
  CreateToDoForm,
  CreateToDoWrapper,
  DropdownWrapper,
  ErrorMsg,
  Label
} from './styles';

function CreateTodoModal({ onClose }) {
  const { eachContact } = useSelector((state) => state.contact);
  const id = eachContact?.id;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      todo: '',
      details: '',
      dueDate: ''
    },
    validationSchema: CreateTodoValidationSchema,
    onSubmit: (values) => {
      const body = {
        todo: values.todo,
        details: values.details,
        due_at: values.dueDate
      };
      dispatch(createTodo(body)).then(() => {
        dispatch(eachTodo(id));

        onClose();
        toast.success('Todo created successfully');
      });
    }
  });
  const priorityOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
  return (
    <CreateToDoWrapper>
      <CreateToDoForm onSubmit={formik.handleSubmit}>
        <Label>Todo</Label>
        <Input
          className="input-field"
          type="text"
          id="todo"
          name="todo"
          placeholder="To-do"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.todo}
        />
        {formik.touched.todo && formik.errors.todo ? (
          <ErrorMsg>{formik.errors.todo}</ErrorMsg>
        ) : null}
        <Label>Details</Label>
        <Input
          className="input-field"
          type="text"
          id="details"
          name="details"
          placeholder="Details"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.details}
        />
        {formik.touched.details && formik.errors.details ? (
          <ErrorMsg>{formik.errors.details}</ErrorMsg>
        ) : null}
        <Label>Due date</Label>
        <Input
          className="input-field"
          type="date"
          id="dueDate"
          name="dueDate"
          placeholder=" Due date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dueDate}
        />
        {formik.touched.dueDate && formik.errors.dueDate ? (
          <ErrorMsg>{formik.errors.dueDate}</ErrorMsg>
        ) : null}
        <Label>Assignees</Label>
        <SelectDropDown
          id="assignees"
          name="assignees"
          type={'text'}
          options={priorityOptions}
          value={formik.values.assignees}
          onChange={(value) => formik.setFieldValue('assignees', value.value)}
          onBlur={formik.handleBlur}
        />
        <div className="error">
          {formik.touched.assignees && formik.errors.assignees ? (
            <ErrorMsg>{formik.errors.assignees}</ErrorMsg>
          ) : null}
        </div>
        <DropdownWrapper>
          <div>
            <Label>Attachments</Label>
          </div>
          <FileUploadButton imgPreview="upload-button" className="image-upload">
            <DPIconUploadFile />
          </FileUploadButton>
        </DropdownWrapper>
        <ButtonContainer>
          <Button type="button" onClick={onClose} className="cancel-btn" auth invert>
            Cancel
          </Button>
          <Button type="submit" className="save-btn">
            Save
          </Button>
        </ButtonContainer>
      </CreateToDoForm>
    </CreateToDoWrapper>
  );
}

export default CreateTodoModal;
