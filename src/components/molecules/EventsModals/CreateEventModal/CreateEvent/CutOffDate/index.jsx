import Input from 'components/atoms/Input/Input';
import Switch from 'components/atoms/Switch/Switch';
import React from 'react';
import { DetailLabel, EventWrapper, InputWrapper, SwitchLabel, SwitchWrapper } from './styles';

function CutOffDate({ formik, ErrorMsg }) {
  return (
    <div>
      <EventWrapper>
        <SwitchWrapper className="registration-switch ">
          <SwitchLabel>Event has registration cutoff date</SwitchLabel>
          <Switch />
        </SwitchWrapper>

        <InputWrapper>
          <div className="input-container">
            <DetailLabel>Event registration cutoff date</DetailLabel>
            <Input
              className="date-time-input end-date"
              id="registrationDate"
              name="registrationDate"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.registrationDate}
            />
            {formik.touched.registrationDate && formik.errors.registrationDate ? (
              <ErrorMsg>{formik.errors.registrationDate}</ErrorMsg>
            ) : null}
          </div>

          <div className="input-container">
            <DetailLabel>End time</DetailLabel>
            <Input
              className="date-time-input end-date"
              id="registrationEndTime"
              name="registrationEndTime"
              type="time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.registrationEndTime}
            />
            {formik.touched.registrationEndTime && formik.errors.registrationEndTime ? (
              <ErrorMsg>{formik.errors.registrationEndTime}</ErrorMsg>
            ) : null}
          </div>
        </InputWrapper>
      </EventWrapper>
    </div>
  );
}

export default CutOffDate;
