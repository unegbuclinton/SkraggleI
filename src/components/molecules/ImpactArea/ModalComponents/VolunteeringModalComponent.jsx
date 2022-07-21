import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import FileUploadButton from 'components/atoms/FileUploadButton';
import SelectDropDown from 'components/atoms/GenericDropdown';
import Input from 'components/atoms/Input/Input';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconUploadFile } from 'icons';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function VolunteeringModalComponent() {
  const { contactData } = useSelector((state) => state.contact);
  const { campaigns } = useSelector((state) => state.campaign);

  const contactOptions = contactData?.map((current) => ({
    value: current?.id,
    label: current?.first_name
  }));

  const campaign = campaigns?.map((current) => ({ value: current?.id, label: current?.name }));

  const impactAreaOptions = [{ value: 'lorem Ipsum', label: 'lorem Ipsum' }];

  return (
    <VolunteeringFormWrapper>
      <Card className="volunteering-card">
        <VolunteeringFieldWrapper>
          <VolunteeringLabel>CONTACT</VolunteeringLabel>
          <SelectDropDown
            className="add-household__dropdown"
            isSearchable={false}
            id="contact_id"
            name="contact_id"
            type={'text'}
            options={contactOptions}
            //   value={formik.values.contact_id}
            //   onChange={(value) => formik.setFieldValue('contact_id', value.value)}
            //   onBlur={formik.handleBlur}
          />
        </VolunteeringFieldWrapper>
        <VolunteeringFieldWrapper>
          <VolunteeringLabel>ACTIVITY NAME</VolunteeringLabel>
          <Input className="volunteering__input" placeholder="Lorem Ipsum" />
        </VolunteeringFieldWrapper>

        <VolunteeringDateWraper>
          <VolunteeringFieldWrapper>
            <VolunteeringLabel>START DATE</VolunteeringLabel>
            <Input
              className="date-time-input"
              id="eventStartDate"
              name="eventStartDate"
              type="date"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.eventStartDate}
            />
          </VolunteeringFieldWrapper>
          <VolunteeringFieldWrapper>
            <VolunteeringLabel>END DATE</VolunteeringLabel>
            <Input
              className="date-time-input end-date"
              id="eventEndDate"
              name="eventEndDate"
              type="date"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.eventEndDate}
            />
          </VolunteeringFieldWrapper>
          <VolunteeringFieldWrapper>
            <VolunteeringLabel>Hours</VolunteeringLabel>
            <Input
              className="start-time-input"
              id="startTime"
              name="startTime"
              type="time"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              //   value={formik.values.startTime}
            />
          </VolunteeringFieldWrapper>
        </VolunteeringDateWraper>

        <VolunteeringFieldWrapper>
          <VolunteeringLabel>DESCRIPTION</VolunteeringLabel>
          <textarea className="volunteering__description" placeholder="Lorem Ipsum" />
        </VolunteeringFieldWrapper>

        <VolunteeringFieldWrapper>
          <VolunteeringLabel>IMPACT AREA</VolunteeringLabel>
          <SelectDropDown
            className="add-household__dropdown"
            isSearchable={false}
            id="impact_id"
            name="impact_id"
            type={'text'}
            options={impactAreaOptions}
            //   value={formik.values.contact_id}
            //   onChange={(value) => formik.setFieldValue('contact_id', value.value)}
            //   onBlur={formik.handleBlur}
          />
        </VolunteeringFieldWrapper>

        <VolunteeringFieldWrapper>
          <VolunteeringLabel>CAMPAIGN</VolunteeringLabel>
          <SelectDropDown
            placeholder={'Lorem Ipsum'}
            id="campaignName"
            name="campaignName"
            type={'text'}
            options={campaign}
            // value={formik.values.campaignName}
            // onChange={(value) => formik.setFieldValue('campaignName', value.value)}
            // onBlur={formik.handleBlur}
          />
        </VolunteeringFieldWrapper>

        <VolunteeringFieldWrapper>
          <VolunteeringLabel>Attachments</VolunteeringLabel>
          <FileUploadButton className="display-photos__button" imgPreview="img-preview__profile">
            <DPIconUploadFile />
          </FileUploadButton>
        </VolunteeringFieldWrapper>
      </Card>
      <Card className="volunteering-card__footer">
        <VolunteeringFooter>
          <Button className="cancel-btn" invert auth>
            Cancel
          </Button>

          <Button className="save-btn" auth>
            Save
          </Button>
        </VolunteeringFooter>
      </Card>
    </VolunteeringFormWrapper>
  );
}

export default VolunteeringModalComponent;

const VolunteeringFormWrapper = styled.div`
  .volunteering-card {
    padding: 3.2rem 2.4rem 2.4rem 2.4rem;

    &__footer {
      padding: 0rem 2.4rem 2.4rem 2.4rem;
    }
  }
`;

const VolunteeringDateWraper = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const VolunteeringFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  .date-time-input {
    border: 0.1rem solid ${COLORS['gray-500']};
    display: flex;
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    max-width: 18rem;
    margin: 0.8rem 0 0 0;
  }
  .start-time-input {
    border: 0.1rem solid ${COLORS['gray-500']};
    border-radius: 0.5rem;
    background-color: ${COLORS.white};
    width: 18rem;
    margin: 0.8rem 0 0rem 0;
  }

  .volunteering__input {
    width: 100%;
    background: ${COLORS.white};
    border: 1px solid ${COLORS['gray-500']};
    font-weight: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.small};
    line-height: 152.69%;
    color: ${COLORS.black};
  }
  .volunteering__description {
    resize: none;
    border: 1px solid ${COLORS['gray-500']};
    border-radius: 5px;
    display: flex;
    min-height: 20.4rem;
    width: 100%;
    background: ${COLORS.white};
    padding: 2.3rem 2.1rem;
    font-weight: ${FONTWEIGHTS.medium};
    font-size: ${FONTSIZES.small};
    line-height: 152.69%;
    color: ${COLORS.black};
  }
  .display-photos {
    display: flex;
    &__button {
      width: 8.1rem;
      height: 8.1rem;
      margin-right: 1.6rem;
    }
  }

  .img-preview {
    &__profile {
      width: 12.6rem;
      height: 8.1rem;
      border-radius: 0.5rem;
    }
    &__display {
      width: 8.1rem;
      height: 8.1rem;
      margin-right: 1.6rem;
    }
  }
`;

const VolunteeringLabel = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-size: ${FONTSIZES.small};
  line-height: 152.69%;
  display: flex;
  color: ${COLORS['grey-200']};
`;

const VolunteeringFooter = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: flex-end;

  .cancel-btn {
    width: 10.7rem;
    height: 5.1rem;
  }

  .save-btn {
    width: 20.5rem;
    height: 5.1rem;
  }
`;
