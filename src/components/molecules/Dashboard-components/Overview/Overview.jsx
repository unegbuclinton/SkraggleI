import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import React, { useState } from "react";
import { OverviewLeft } from "./styles";
import { OverviewWrapper } from "./styles";
import data from "utilities/filterData.json";
import { OverviewRight } from "./styles";
import Button from "components/atoms/Button/Button";
import Card from "components/atoms/Card/Card";
import { DatePicker } from "./styles";
import DateRange from "components/molecules/DateRange";
import { DPIconRangeIcon } from "icons";
import { DPIconDateArrow } from "icons";

function Overview() {
  const [filterRange, setFilterRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [datePick, setDatePick] = useState(false);
  const toogleDateRange = () => setDatePick((prev) => !prev);

  return (
    <OverviewWrapper>
      <Card className="overview-card">
        <OverviewLeft>
          <p className="overview-heder__text">Overview</p>
          <div className="overview-action__buttons">
            <div className="range-picker" onClick={toogleDateRange}>
              <DatePicker>
                {" "}
                <DPIconRangeIcon />
              </DatePicker>
              <DatePicker> {filterRange.startDate.toLocaleString()}</DatePicker>
              <DatePicker>
                {" "}
                <DPIconDateArrow />
              </DatePicker>
              <DatePicker> {filterRange.endDate.toLocaleString()}</DatePicker>
            </div>
            <CustomDropdown data={data} />
            <CustomDropdown data={data} />
          </div>
          {datePick && (
            <DateRange
              onChangeRange={(ranges) => {
                setFilterRange(ranges);
              }}
            />
          )}
        </OverviewLeft>
        <OverviewRight>
          <Button className="overview-btn">Manage Widgets</Button>
        </OverviewRight>
      </Card>
    </OverviewWrapper>
  );
}

export default Overview;
