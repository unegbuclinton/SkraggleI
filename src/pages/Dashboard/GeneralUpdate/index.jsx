import Card from 'components/atoms/Card';
import SelectDropDown from 'components/atoms/GenericDropdown';
import React, { useState } from 'react';
import { GeneralBody, GeneralHeader, GeneralWrapper } from './styles';

function GeneralUpdate() {
  const [days, setDays] = useState();
  const daysOptions = [
    { value: 'Last 90 Days', label: 'Last 90 Days' },
    { value: 'Last 60 Days', label: 'Last 60 Days' },
    { value: 'Last 30 Days', label: 'Last 30 Days' }
  ];
  return (
    <GeneralWrapper>
      <Card className="general-card">
        <GeneralHeader>
          <p className="body-text">General Update</p>
          <SelectDropDown
            options={daysOptions}
            onChange={(values) => setDays(values)}
            value={days}
            className="general-update-dropdown"
          />
        </GeneralHeader>
        <GeneralBody>
          <div className="body--wrapper">
            <p className="body--wrapper__number">$25,000</p>
            <p className="body--wrapper__text">New donations</p>
          </div>
          <div className="body--wrapper">
            <p className="body--wrapper__number">$477</p>
            <p className="body--wrapper__text">New Revenue</p>
          </div>
          <div className="body--wrapper">
            <p className="body--wrapper__number">14</p>
            <p className="body--wrapper__text">New Contacts</p>
          </div>
        </GeneralBody>
      </Card>
    </GeneralWrapper>
  );
}

export default GeneralUpdate;
