import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";
import { useFormik } from "formik";
import React from "react";
import { tagValidationSchema } from "validation/Schema";
import {
  ButtonContainer,
  ErrorMsg,
  FormContainer,
  FormLabel,
  ModalContainer,
  ModalWrapper,
} from "./styles";

function CreateTags({ onClose }) {
  const formik = useFormik({
    initialValues: {
      tag: "",
    },
    validationSchema: tagValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <ModalWrapper>
      <ModalContainer>
        <FormContainer onSubmit={formik.handleSubmit}>
          <FormLabel>TAGS</FormLabel>
          <Input
            className="input-field"
            type="text"
            id="tag"
            name="tag"
            placeholder="Tag"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tag}
          />
          {formik.touched.tag && formik.errors.tag ? (
            <ErrorMsg>{formik.errors.tag}</ErrorMsg>
          ) : null}
          <ButtonContainer>
            <Button className="cancel" onClick={onClose} auth invert>
              Cancel
            </Button>
            <Button className="continue">Continue</Button>
          </ButtonContainer>
        </FormContainer>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default CreateTags;
