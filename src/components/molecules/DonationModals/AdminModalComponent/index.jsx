import React from "react";

import Card from "components/atoms/Card";
import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";

import { useFormik } from "formik";
import { createCampaignSchema } from "validation/Schema";

import {
  ModalWrapper,
  ModalInputDescription,
  ButtonsContainer,
} from "./styles";
import ErrorMessage from "components/atoms/ErrorMessage";

const AdminModalComponent = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: createCampaignSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 4));
    },
  });
  return (
    <ModalWrapper onSubmit={formik.handleSubmit}>
      <Card>
        <h1>NAME</h1>
        <Input
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
        />
        {formik.touched.description && formik.errors.description ? (
          <ErrorMessage>{formik.errors.description}</ErrorMessage>
        ) : null}

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
