import React, { useState } from 'react';
import DropdownComponent from 'components/atoms/Dropdown';
import Input from 'components/atoms/Input/Input';
import Switch from 'components/atoms/Switch/Switch';
import { state } from 'utilities/modalData';

import {
  AddressWrapper,
  DetailLabel,
  DetailsSubHeading,
  DetailsText,
  EventWrapper
} from './styles';

function EventLocation({ formik, ErrorMsg }) {
  const [selected, setSelected] = useState('State');
  return (
    <div>
      <DetailsSubHeading className="event-heading">Event location</DetailsSubHeading>
      <EventWrapper>
        <DetailLabel>Vanue</DetailLabel>
        <Input
          className="details-input"
          type="text"
          id="venue"
          name="venue"
          placeholder="Lorem Ipsam"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.venue}
        />
        {formik.touched.venue && formik.errors.venue ? (
          <ErrorMsg>{formik.errors.venue}</ErrorMsg>
        ) : null}
        <DetailLabel>Address</DetailLabel>
        <Input
          className="details-input"
          type="text"
          id="address"
          name="address"
          placeholder="Lorem ipsam"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
        {formik.touched.address && formik.errors.address ? (
          <ErrorMsg>{formik.errors.address}</ErrorMsg>
        ) : null}
        <AddressWrapper>
          <div>
            <DetailLabel>City</DetailLabel>
            <Input
              className="city-input"
              id="city"
              name="city"
              type="text"
              placeholder="City"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city ? (
              <ErrorMsg>{formik.errors.city}</ErrorMsg>
            ) : null}
          </div>
          <div>
            <DetailLabel>State</DetailLabel>
            <DropdownComponent
              className="state"
              id="state"
              name="state"
              selected={selected}
              setSelected={setSelected}
              data={state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
            />
            {formik.touched.state && formik.errors.state ? (
              <ErrorMsg>{formik.errors.state}</ErrorMsg>
            ) : null}
          </div>
          <div>
            <DetailLabel>Zip</DetailLabel>
            <Input
              type="text"
              className="zip"
              id="zip"
              name="zip"
              placeholder="zip"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zip}
            />
            {formik.touched.zip && formik.errors.zip ? (
              <ErrorMsg>{formik.errors.zip}</ErrorMsg>
            ) : null}
          </div>
        </AddressWrapper>
        <div className="switch-wrapper">
          <DetailsText>Enable map link</DetailsText>
          <Switch />
        </div>
      </EventWrapper>
    </div>
  );
}

export default EventLocation;
