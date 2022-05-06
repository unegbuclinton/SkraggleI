import CalendarDropdown from "components/atoms/CalendarDropdown";
import Card from "components/atoms/Card";
import GoalProgressTracker from "components/molecules/GoalProgressTracker";
import AreaChart from "components/organisms/AreaChart";
// import ProgressBar from 'components/atoms/ProgressBar/ProgressBar';
import { COLORS } from "constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "constants/font-spec";
import React, { useState } from "react";
import styled from "styled-components";

const RevenueMetrics = () => {
  const [openRange, setOpenRange] = useState(false);
  const toggleRange = () => setOpenRange((prev) => !prev);
  const [filterRange, setFilterRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    label: "Today",
  });
  const handleSetRange = (range) => setFilterRange(range);

  const series = [
    {
      name: "Skraggle",
      data: [300, 300, 117, 300, 293, 400, 179, 300, 117, 293, 400, 179],
      color: "#2FC18D",
    },
  ];
  return (
    <RevenueMetricsContainer>
      <RevenueGoalsWrapper>
        <RevenueGoalsHeader>Revenue Goals</RevenueGoalsHeader>
        <RevenueGoalsContentWrapper>
          <GoalProgressTracker value={19540.23} target={93825} heading="Monthly Goal" />
          <GoalProgressTracker value={38540.23} target={93825} heading="Quarterly Goal" />
          <GoalProgressTracker value={29540.23} target={93825} heading="Yearly Goal" />
        </RevenueGoalsContentWrapper>
      </RevenueGoalsWrapper>

      <RevenueTrackerWrapper>
        <RevenueTrackerHeaderWrapper>
          <span>Revenue Tracker</span>
          <CalendarDropdown
            label={filterRange?.label}
            toggleRange={toggleRange}
            setRange={handleSetRange}
            open={openRange}
          />
        </RevenueTrackerHeaderWrapper>
        <AreaChart
          series={series}
          categories={[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]}
          stroke={{ colors: ["#2FC18D"] }}
        />
      </RevenueTrackerWrapper>
    </RevenueMetricsContainer>
  );
};

export default RevenueMetrics;

const RevenueMetricsContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const RevenueGoalsWrapper = styled(Card)`
  padding: 0 4.7rem 0 4.1rem;
  flex: 1;
`;
const RevenueGoalsHeader = styled.div`
  padding: 2.4rem 0 1.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS["header-grey"]};

  &:after {
    content: "";
    position: absolute;
    background: ${COLORS.torquoise};
    height: 1px;
    width: calc(100% - 3.1rem);
    bottom: 0;
    left: 0;
  }
`;

const RevenueGoalsContentWrapper = styled.div`
  padding: 2.4rem 0 5.7rem;
  display: flex;
  flex-direction: column;
  gap: 3.9rem;
`;

const RevenueTrackerWrapper = styled(Card)`
  padding: 0.8rem 1.6rem 0 3.3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RevenueTrackerHeaderWrapper = styled.div`
  padding-bottom: 1.2rem;
  margin-left: 0.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS["header-grey"]};

  &:after {
    content: "";
    position: absolute;
    background: ${COLORS.torquoise};
    height: 1px;
    width: calc(100% - 4rem);
    bottom: 0;
    left: 0;
  }
`;
