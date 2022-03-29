<<<<<<< HEAD
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
=======
import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import CustomDropdown from 'components/atoms/CustomDropdown/CustomDropdown';
import DateRange from 'components/molecules/DateRange';
import dayjs from 'dayjs';
import { DPIconDateArrow, DPIconRangeIcon } from 'icons';
import WidgetModal from 'pages/modals/WidgetModal';
import React, { useState } from 'react';
import { datas1 } from 'utilities/overviewData';
import {
  DatePicker,
  OverviewLeft,
  OverviewRight,
  OverviewWrapper,
} from './styles';
>>>>>>> e738325fd7cd8cd1bb50b3fe13d6293779a0a0fd

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
<<<<<<< HEAD
                {dayjs(filterRange.startDate).format("MMM DD YYYY")}
=======
                {dayjs(filterRange.startDate).format('MMM DD YYYY')}
>>>>>>> e738325fd7cd8cd1bb50b3fe13d6293779a0a0fd
              </DatePicker>
              <DatePicker>
                <DPIconDateArrow />
              </DatePicker>
              <DatePicker>
<<<<<<< HEAD
                {dayjs(filterRange.endDate).format("MMM DD YYYY")}
=======
                {dayjs(filterRange.endDate).format('MMM DD YYYY')}
>>>>>>> e738325fd7cd8cd1bb50b3fe13d6293779a0a0fd
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
