import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { getAllInteractions, getInteraction } from 'features/contact/contactSlice';
import { useFormik } from 'formik';
import { DPIconUploadFile } from 'icons';
import { ErrorMsg } from 'pages/LogIn/styles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactInteractionSchema } from 'validation/Schema';
import {
  InteractionInputWrapper,
  InteractionLabel,
  InteractionTextarea,
  InteractionWrapper
} from './styles';

function InteractionComponent({ onClose }) {
  const { eachContact } = useSelector((state) => state.contact);
  const interactionId = eachContact.id;
  const dispatch = useDispatch();
  const [showToDO, setShowToDO] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggleTodo = () => setShowToDO((prev) => !prev);
  const toggleContacts = () => setShowContact((prev) => !prev);

  const typeOptions = [
    { value: 'Email', label: 'Email' },
    { value: 'Text', label: 'Text' }
  ];
  const formik = useFormik({
    initialValues: {
      type: '',
      date: '',
      subject: '',
      description: '',
      assignee: '',
      contact: '',
      toDo: '',
      dueDate: '',
      details: ''
    },
    validationSchema: contactInteractionSchema,
    onSubmit: (values) => {
      const body = {
        type: values.type,
        interacted_at: values.date,
        subject: values.subject,
        description: values.description,
        contact_id: interactionId
        // assignee: values.assignee,
        // toDo: values.toDo,
        // details: values.details,
        // contact: values.contact
      };
      dispatch(getInteraction(body));
      dispatch(getAllInteractions(interactionId));
      onClose();
    }
  });
  return (
    <InteractionWrapper onSubmit={formik.handleSubmit}>
      <Card className="interaction-card">
        <InteractionInputWrapper>
          <InteractionLabel>Type </InteractionLabel>
          <SelectDropDown
            className="interaction-select"
            id="type"
            name="type"
            options={typeOptions}
            value={formik.values.type}
            onChange={(value) => formik.setFieldValue('type', value.value)}
            onBlur={formik.handleBlur}
          />
          {formik.touched.type && formik.errors.type ? (
            <ErrorMsg>{formik.errors.type}</ErrorMsg>
          ) : null}
        </InteractionInputWrapper>
        <InteractionInputWrapper>
          <InteractionLabel>Date </InteractionLabel>
          <Input
            type="date"
            autoWidth
            className="interaction-input"
            id="date"
            name="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
          {formik.touched.date && formik.errors.date ? (
            <ErrorMsg>{formik.errors.date}</ErrorMsg>
          ) : null}
        </InteractionInputWrapper>
        <InteractionInputWrapper>
          <InteractionLabel>Subject </InteractionLabel>
          <Input
            autoWidth
            className="interaction-input"
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          />
          {formik.touched.subject && formik.errors.subject ? (
            <ErrorMsg>{formik.errors.subject}</ErrorMsg>
          ) : null}
        </InteractionInputWrapper>
        <InteractionInputWrapper>
          <InteractionLabel>Description </InteractionLabel>
          <InteractionTextarea
            id="description"
            name="description"
            type="text"
            placeholder="Description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <ErrorMsg>{formik.errors.description}</ErrorMsg>
          ) : null}
        </InteractionInputWrapper>
        <InteractionInputWrapper>
          <InteractionLabel>Attachment </InteractionLabel>
          <div className="upload-icon">
            <DPIconUploadFile />
          </div>
        </InteractionInputWrapper>

        <Checkbox
          label=" More contacts are involved in this interaction "
          className="interaction-checkbox"
          onClick={toggleTodo}
        />
        <div className={`options ${showToDO ? '' : 'unshow-options'}`}>
          <InteractionInputWrapper>
            <InteractionLabel>Contact </InteractionLabel>
            <SelectDropDown
              className="interaction-select"
              id="contact"
              name="contact"
              options={typeOptions}
              value={formik.values.contact}
              onChange={(value) => formik.setFieldValue('contact', value.value)}
              onBlur={formik.handleBlur}
            />
          </InteractionInputWrapper>
        </div>

        <Checkbox label="  Add To-do " className="interaction-checkbox" onClick={toggleContacts} />
        <div className={`options ${showContact ? '' : 'unshow-options'}`}>
          <InteractionInputWrapper>
            <InteractionLabel>To-do </InteractionLabel>
            <Input
              placeholder="Enter Name"
              autoWidth
              className="interaction-input"
              id="toDo"
              name="toDo"
              type="toDo"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.toDo}
            />
          </InteractionInputWrapper>
          <InteractionInputWrapper>
            <InteractionLabel>Details </InteractionLabel>
            <InteractionTextarea
              id="details"
              name="details"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.details}
            />
          </InteractionInputWrapper>
          <InteractionInputWrapper>
            <InteractionLabel>Due Date </InteractionLabel>
            <Input
              type="date"
              autoWidth
              className="interaction-input"
              id="dueDate"
              name="dueDate"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dueDate}
            />
          </InteractionInputWrapper>
          <InteractionInputWrapper>
            <InteractionLabel>Assignee </InteractionLabel>
            <SelectDropDown
              className="interaction-select"
              id="assignee"
              name="assignee"
              options={typeOptions}
              value={formik.values.assignee}
              onChange={(value) => formik.setFieldValue('assignee', value.value)}
              onBlur={formik.handleBlur}
            />
          </InteractionInputWrapper>
          <InteractionInputWrapper>
            <InteractionLabel>Attachment </InteractionLabel>
            <div className="upload-icon">
              <DPIconUploadFile />
            </div>
          </InteractionInputWrapper>
        </div>

        <div className="interaction__footer">
          <Button invert auth className="interaction__cancel-btn" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" auth className="interaction__save-btn">
            Save
          </Button>
        </div>
      </Card>
    </InteractionWrapper>
  );
}

export default InteractionComponent;
