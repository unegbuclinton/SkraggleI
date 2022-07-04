import CalendarDropdown from 'components/atoms/CalendarDropdown';
import Card from 'components/atoms/Card';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const FundraisingActivity = () => {
  const { fundraisingActivity } = useSelector((state) => state.donation);

  const { contacts, donations, revenue } = fundraisingActivity;
  const [openRange, setOpenRange] = useState(false);
  const toggleRange = () => setOpenRange((prev) => !prev);
  const [filterRange, setFilterRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    label: 'Today'
  });
  const handleSetRange = (range) => setFilterRange(range);

  return (
    <FRAContainer>
      <FRAHeaderWrapper>
        <span>Fundraising Activity</span>
        <CalendarDropdown
          label={filterRange?.label}
          toggleRange={toggleRange}
          setRange={handleSetRange}
          open={openRange}
        />
      </FRAHeaderWrapper>
      <FRAContentWrapper>
        <div className="data-wrapper">
          <h3>${donations}</h3>
          <p>NEW DONATIONS</p>
        </div>
        <div className="data-wrapper">
          <h3>${revenue}</h3>
          <p>NEW REVENUE</p>
        </div>
        <div className="data-wrapper">
          <h3>{contacts}</h3>
          <p>NEW CONTACTS</p>
        </div>
      </FRAContentWrapper>
    </FRAContainer>
  );
};

export default FundraisingActivity;

const FRAContainer = styled(Card)`
  padding: 0.8rem 1.6rem 0 3.9rem;
`;

const FRAHeaderWrapper = styled.div`
  padding-bottom: 1.2rem;

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

  .date-wrapper {
    position: relative;

    &__range-picker {
      position: absolute;
    }
  }
`;

const FRAContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12.367rem;
  padding: 5.227rem 7.427rem;
  text-align: center;

  .data-wrapper {
    h3 {
      font-size: ${FONTSIZES.xxlarge};
      font-weight: ${FONTWEIGHTS.bold};
      margin-bottom: 2.246rem;
    }

    p {
      color: ${COLORS['snooze-grey']};
      text-transform: uppercase;
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.medium};
    }
  }
`;
