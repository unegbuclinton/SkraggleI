import React from "react";
import Input from "components/atoms/Input/Input";
import { DetailLabel, DetailsSubHeading, EventWrapper } from "./styles";
import FileUploadButton from "components/atoms/FileUploadButton";
import { DPIconUploadFile } from "icons";

function EventInformation({ formik, ErrorMsg }) {
  return (
    <div>
      <DetailsSubHeading>Event information</DetailsSubHeading>
      <EventWrapper>
        <DetailLabel className="name-label">Name</DetailLabel>
        <Input
          className="details-input"
          type="text"
          id="name"
          name="name"
          placeholder="A day with orphans"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorMsg>{formik.errors.name}</ErrorMsg>
        ) : null}
        <div className="editor-container">
          <div className="text-editor">Text Editor</div>
          <div className="editor-container__upload">
            <DetailLabel>Event image</DetailLabel>
            <FileUploadButton
              imgPreview="upload-button"
              className="image-upload"
            >
              <DPIconUploadFile />
            </FileUploadButton>
          </div>
        </div>
        <DetailLabel>Event sold out message</DetailLabel>
        <Input
          className="details-input message-input"
          id="message"
          name="message"
          type="text"
          placeholder="Lorem ipsam"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <ErrorMsg>{formik.errors.message}</ErrorMsg>
        ) : null}
      </EventWrapper>
    </div>
  );
}

export default EventInformation;
