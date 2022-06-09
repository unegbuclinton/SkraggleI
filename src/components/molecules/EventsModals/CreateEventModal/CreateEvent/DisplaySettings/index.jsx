import Input from 'components/atoms/Input/Input';
import Switch from 'components/atoms/Switch/Switch';
import React from 'react';
import {
  DetailLabel,
  DetailsSubHeading,
  EventWrapper,
  InputWrapper,
  SwitchLabel,
  SwitchWrapper
} from './styles';

function DisplaySettings({ formik, ErrorMsg }) {
  return (
    <div>
      <DetailsSubHeading className="event-heading">Display settings</DetailsSubHeading>
      <EventWrapper>
        <DetailLabel>Maximum number of total participants</DetailLabel>
        <Input
          className="details-input"
          id="settins"
          name="settings"
          onWheel={() => document.activeElement.blur()}
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.settings}
        />
        {formik.touched.settings && formik.errors.settings ? (
          <ErrorMsg>{formik.errors.settings}</ErrorMsg>
        ) : null}
        <SwitchWrapper className="option-switch ">
          <SwitchLabel>Enable one time event donations</SwitchLabel>
          <Switch />
        </SwitchWrapper>

        <SwitchWrapper className="date">
          <SwitchLabel>Event has start/end date</SwitchLabel>
          <Switch />
        </SwitchWrapper>

        <InputWrapper>
          <div>
            <DetailLabel>Event start date</DetailLabel>
            <Input
              className="date-time-input"
              id="eventStartDate"
              name="eventStartDate"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.eventStartDate}
            />
            <div className="error-date">
              {formik.touched.eventStartDate && formik.errors.eventStartDate ? (
                <ErrorMsg>{formik.errors.eventStartDate}</ErrorMsg>
              ) : null}
            </div>
          </div>

          <div>
            <DetailLabel>Start time</DetailLabel>
            <Input
              className="start-time-input"
              id="startTime"
              name="startTime"
              type="time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.startTime}
            />
            {formik.touched.startTime && formik.errors.startTime ? (
              <ErrorMsg>{formik.errors.startTime}</ErrorMsg>
            ) : null}
          </div>
        </InputWrapper>

        <InputWrapper>
          <div className="input-container">
            <DetailLabel>Event start date</DetailLabel>
            <Input
              className="date-time-input end-date"
              id="eventStartDateTwo"
              name="eventStartDateTwo"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.eventStartDateTwo}
            />
            <div className="error-date">
              {formik.touched.eventStartDateTwo && formik.errors.eventStartDateTwo ? (
                <ErrorMsg>{formik.errors.eventStartDateTwo}</ErrorMsg>
              ) : null}
            </div>
          </div>

          <div className="input-container">
            <DetailLabel>End time</DetailLabel>
            <Input
              className="date-time-input end-date"
              id="endTime"
              name="endTime"
              type="time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.endTime}
            />
            <div className="error-time">
              {formik.touched.endTime && formik.errors.endTime ? (
                <ErrorMsg>{formik.errors.endTime}</ErrorMsg>
              ) : null}
            </div>
          </div>
        </InputWrapper>
      </EventWrapper>
    </div>
  );
}

export default DisplaySettings;
