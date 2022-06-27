import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import ErrorMessage from 'components/atoms/ErrorMessage';
import Input from 'components/atoms/Input/Input';
import { useFormik } from 'formik';
import React from 'react';
import { createCampaignSchema } from 'validation/Schema';
import { ButtonsContainer, ModalInputDescription, ModalWrapper } from './styles';

const AdminModalComponent = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: ''
    },
    validationSchema: createCampaignSchema,

    onSubmit: () => {}
  });

  return (
    <ModalWrapper onSubmit={formik.handleSubmit}>
      <Card>
        <h1>NAME</h1>
        <Input
          autoWidth
          className="campaign-modal"
          type="text"
          placeholder="Lorem Ipsum"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        ) : null}

        <h1>DESCRIPTION</h1>
        <ModalInputDescription
          type="text"
          placeholder="Lorem Ipsum"
          id="description"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <ErrorMessage>{formik.errors.description}</ErrorMessage>
        ) : null}
        {console.log(formik.values.description)}
        <ButtonsContainer>
          <Button type="submit" className="save-btn" auth>
            Save
          </Button>
        </ButtonsContainer>
      </Card>
    </ModalWrapper>
  );
};

export default AdminModalComponent;
