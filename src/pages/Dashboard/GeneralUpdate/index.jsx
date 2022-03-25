import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import React from "react";
import { GeneralBody, GeneralHeader, GeneralWrapper } from "./styles";
import data from "utilities/filterData.json";
import Card from "components/atoms/Card"

function GeneralUpdate() {
  return (
    <GeneralWrapper>
      <Card className='general-card'>
        <GeneralHeader>
          <p className="body-text">General Update</p>
          <CustomDropdown data={data} />
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
