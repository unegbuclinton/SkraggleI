import CustomDropdown from "components/atoms/CustomDropdown/CustomDropdown";
import React, { useState } from "react";
import { OverviewLeft } from "./styles";
import { OverviewWrapper } from "./styles";
import { datas1 } from "utilities/overviewData";
import { OverviewRight } from "./styles";
import Button from "components/atoms/Button/Button";

import { DatePicker } from "./styles";
import DateRange from "components/molecules/DateRange";
import { DPIconRangeIcon } from "icons";
import { DPIconDateArrow } from "icons";
import dayjs from "dayjs";
import WidgetModal from "pages/Dashboard/modals/WidgetModal";
import Card from "components/atoms/Card";

function Overview() {
  const [openWidget, setOpenWidget] = useState(false);

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
                <DPIconRangeIcon />
              </DatePicker>
              <DatePicker>
                {dayjs(filterRange.startDate).format('MMM DD YYYY')}
              </DatePicker>
              <DatePicker>
                <DPIconDateArrow />
              </DatePicker>
              <DatePicker>
                {dayjs(filterRange.endDate).format('MMM DD YYYY')}
              </DatePicker>
            </div>
            <CustomDropdown data={datas1} />
            <CustomDropdown data={datas1} />
          </div>
          {datePick && (
            <DateRange
              open={datePick}
              toggle={toogleDateRange}
              className="date-range-picker"
              onChangeRange={(ranges) => {
                setFilterRange(ranges);
              }}
            />
          )}
        </OverviewLeft>
        <OverviewRight>
          <Button
            onClick={() => {
              setOpenWidget(true);
            }}
            className="overview-btn"
          >
            Manage Widgets
          </Button>
          {openWidget && (
            <WidgetModal
              isShown={openWidget}
              onCloseWidget={() => {
                setOpenWidget(false);
              }}
            />
          )}
        </OverviewRight>
      </Card>
    </OverviewWrapper>
  );
}

export default Overview;
