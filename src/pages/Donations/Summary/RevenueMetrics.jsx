import CalendarDropdown from 'components/atoms/CalendarDropdown';
import Card from 'components/atoms/Card';
import GoalProgressTracker from 'components/molecules/GoalProgressTracker';
import AreaChart from 'components/organisms/AreaChart';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { capitalizeFirstLowercaseRest } from 'utilities/helpers';

const RevenueMetrics = () => {
  const { revenueData, RevenueHistory } = useSelector((state) => state.donation);

  const revenue = revenueData?.revenue;
  const [openRange, setOpenRange] = useState(false);
  const toggleRange = () => setOpenRange((prev) => !prev);
  const [filterRange, setFilterRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    label: 'Today'
  });
  const handleSetRange = (range) => setFilterRange(range);

  const revenueRecord = Object.values(RevenueHistory);

  const series = [
    {
      name: 'Skraggle',
      data: revenueRecord,
      color: '#2FC18D'
    }
  ];
  return (
    <RevenueMetricsContainer>
      <RevenueGoalsWrapper>
        <RevenueGoalsHeader>Revenue Goals</RevenueGoalsHeader>
        <RevenueGoalsContentWrapper>
          {revenue?.map(({ goal, type, raised }, idx) => (
            <GoalProgressTracker
              value={raised}
              target={goal}
              heading={`${capitalizeFirstLowercaseRest(type)} Goal`}
              key={idx + 1}
            />
          ))}
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
        <AreaChart series={series} categories={[]} stroke={{ colors: ['#2FC18D'] }} />
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
  color: ${COLORS['header-grey']};

  &:after {
    content: '';
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
  color: ${COLORS['header-grey']};

  &:after {
    content: '';
    position: absolute;
    background: ${COLORS.torquoise};
    height: 1px;
    width: calc(100% - 4rem);
    bottom: 0;
    left: 0;
  }
`;
