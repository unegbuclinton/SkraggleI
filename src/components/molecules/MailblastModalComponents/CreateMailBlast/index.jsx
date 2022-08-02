import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { createNewMailBlast, listAllMailBlast } from 'features/mailblast/mailBlastSlice';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CreateMailBlastSchema } from 'validation/Schema';
import { CreateLabel, CreateMailWrapper, ErrorMsg } from './styles';

function CreateMailBlast({ onCloseModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.mailBlast);

  const { contactData } = useSelector((state) => state.contact);

  const { campaigns } = useSelector((state) => state.campaign);

  const assignee = contactData.map((current) => ({
    value: current?.id,
    label: current?.first_name
  }));

  const campaignData = campaigns.map((current) => ({
    value: current?.id,
    label: current?.name
  }));

  const formik = useFormik({
    initialValues: {
      name: '',
      category: '',
      assignee: '',
      campaign: ''
    },
    validationSchema: CreateMailBlastSchema,
    onSubmit: (values) => {
      const body = {
        name: values.name,
        category: values.category,
        assignee: values.assignee,
        campaign_id: values.campaign
      };
      dispatch(createNewMailBlast(body)).then((data) => {
        if (data.payload.status === 200) {
          onCloseModal();
          toast.success('Mail blast created successfully');
          dispatch(listAllMailBlast());
        }
      });
      navigate('/mail-blasts');
    }
  });
  const categoryOptions = [
    { value: 'category', label: 'category' },
    { value: 'category', label: 'category' },
    { value: 'category', label: 'category' },
    { value: 'category', label: 'category' }
  ];
  return (
    <CreateMailWrapper onSubmit={formik.handleSubmit}>
      <Card className="edit-card">
        <div className="edit-mail-body">
          <div>
            <CreateLabel>Mail Blasts Name</CreateLabel>
            <Input
              className="edit-input"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <ErrorMsg>{formik.errors.name}</ErrorMsg>
            ) : null}
          </div>
          <div className="field-container">
            <CreateLabel>Category</CreateLabel>
            <SelectDropDown
              id="category"
              name="category"
              options={categoryOptions}
              value={formik.values.category}
              onChange={(value) => formik.setFieldValue('category', value.value)}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.category && formik.errors.category ? (
            <ErrorMsg>{formik.errors.category}</ErrorMsg>
          ) : null}

          <div className="field-container">
            <CreateLabel>Assignee</CreateLabel>
            <SelectDropDown
              id="assignee"
              name="assignee"
              options={assignee}
              value={formik.values.assignee}
              onChange={(value) => formik.setFieldValue('assignee', value.value)}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.assignee && formik.errors.assignee ? (
            <ErrorMsg>{formik.errors.assignee}</ErrorMsg>
          ) : null}

          <div className="field-container">
            <CreateLabel>Campaign</CreateLabel>
            <SelectDropDown
              id="campaign"
              name="campaign"
              options={campaignData}
              value={formik.values.campaign}
              onChange={(value) => formik.setFieldValue('campaign', value.value)}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.campaign && formik.errors.campaign ? (
            <ErrorMsg>{formik.errors.campaign}</ErrorMsg>
          ) : null}
        </div>
        <div className="edit-mail-footer">
          <Button type="button" invert auth className="edit-cancel-btn" onClick={onCloseModal}>
            Cancel
          </Button>
          <Button
            type="submit"
            auth
            className="edit-save-btn"
            disabled={(!formik.dirty && !isLoading) || (formik.dirty && isLoading)}>
            Save
          </Button>
        </div>
      </Card>
    </CreateMailWrapper>
  );
}

export default CreateMailBlast;
