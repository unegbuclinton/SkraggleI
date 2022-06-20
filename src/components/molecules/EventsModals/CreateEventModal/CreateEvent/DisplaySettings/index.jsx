import Input from 'components/atoms/Input/Input';
import Switch from 'components/atoms/Switch/Switch';
import React, { useState } from 'react';
import {
  DetailLabel,
  DetailsSubHeading,
  EventWrapper,
  InputWrapper,
  SwitchLabel,
  SwitchWrapper
} from './styles';

function DisplaySettings({ formik, ErrorMsg }) {
  const [toggle, setToogle] = useState(false);
  const toggleSwitch = (checked) => {
    setToogle(checked);
  };
  console.log(toggle);
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
          <Switch
            id="eventTimeDonation"
            type="checkbox"
            name="eventTimeDonation"
            checked={toggle}
            onChange={toggleSwitch}
            onBlur={formik.handleBlur}
            value={formik.values.eventTimeDonation}
          />
          {formik.touched.eventTimeDonation && formik.errors.eventTimeDonation ? (
            <ErrorMsg>{formik.errors.eventTimeDonation}</ErrorMsg>
          ) : null}
        </SwitchWrapper>

        <SwitchWrapper className="date">
          <SwitchLabel>Event has start/end date</SwitchLabel>
          <div>
            <Switch
              id="eventDate"
              name="eventDate"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.eventDate}
            />
            {formik.touched.eventDate && formik.errors.eventDate ? (
              <ErrorMsg>{formik.errors.eventDate}</ErrorMsg>
            ) : null}
          </div>
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
            <DetailLabel>Event end date</DetailLabel>
            <Input
              className="date-time-input end-date"
              id="eventEndDate"
              name="eventEndDate"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.eventEndDate}
            />
            <div className="error-date">
              {formik.touched.eventEndDate && formik.errors.eventEndDate ? (
                <ErrorMsg>{formik.errors.eventEndDate}</ErrorMsg>
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
