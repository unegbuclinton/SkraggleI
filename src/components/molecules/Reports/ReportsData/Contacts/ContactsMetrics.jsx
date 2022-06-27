import Button from 'components/atoms/Button/Button';
import CalendarDropdown from 'components/atoms/CalendarDropdown';
import Card from 'components/atoms/Card';
import AreaChart from 'components/organisms/AreaChart';
import PieChart from 'components/organisms/PieChart';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';

function ContactsMetrics() {
  const [openRange, setOpenRange] = useState(false);
  const toggleRange = () => setOpenRange((prev) => !prev);
  const [filterRange, setFilterRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    label: 'Today'
  });
  const handleSetRange = (range) => setFilterRange(range);

  const series = [
    {
      name: 'Skraggle',
      data: [300, 300, 117, 300, 293, 400, 179, 300, 117, 293, 400, 179],
      color: '#2FC18D'
    }
  ];
  return (
    <ContactsMetricsContainer>
      <ContactsGoalsWrapper>
        <ContactsGoalsHeader>
          <span className="header-text">Organization</span>
          <MenuItems>
            <Button className="export-button">Export</Button>
            <CalendarDropdown
              label={filterRange?.label}
              toggleRange={toggleRange}
              setRange={handleSetRange}
              open={openRange}
            />
          </MenuItems>
        </ContactsGoalsHeader>
        <ContactsGoalsContentWrapper>
          <div className="pie-container">
            <PieChart width={405} height={360} />
            <div className="pie-legend">
              <div className="legend-description">
                <div className="legend-description__donation"></div>
                <p>New Donations</p>
              </div>
              <div className="legend-description">
                <div className="legend-description__contacts"></div>
                <p>New Contacts</p>
              </div>
            </div>
          </div>
        </ContactsGoalsContentWrapper>
      </ContactsGoalsWrapper>

      <ContactsTrackerWrapper>
        <ContactsTrackerHeaderWrapper>
          <span className="header-text">Contacts</span>
          <MenuItems>
            <Button className="export-button">Export</Button>
            <CalendarDropdown
              label={filterRange?.label}
              toggleRange={toggleRange}
              setRange={handleSetRange}
              open={openRange}
            />
          </MenuItems>
        </ContactsTrackerHeaderWrapper>
        <AreaChart
          series={series}
          categories={[
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ]}
          stroke={{ colors: ['#2FC18D'] }}
        />
      </ContactsTrackerWrapper>
    </ContactsMetricsContainer>
  );
}

export default ContactsMetrics;

const ContactsMetricsContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.6rem;
`;

const ContactsGoalsWrapper = styled(Card)`
  padding: 0.8rem 1.6rem 0 3.3rem;
  flex: 1;
  border: 1px solid ${COLORS['porcelain-white']};
`;
const ContactsGoalsHeader = styled.div`
  display: flex;
  flex: 0 auto;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS['header-grey']};
  padding-bottom: 1.2rem;

  &:after {
    content: '';
    position: absolute;
    background: ${COLORS.torquoise};
    height: 1px;
    width: calc(100% - 3.1rem);
    bottom: 0;
    left: 0;
  }

  .header-text {
    display: flex;
    flex: 0.3;
  }
`;

const ContactsGoalsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.9rem;
  margin-top: 0.8rem;

  .pie-container {
    display: flex;
    justify-content: center;
  }
  .pie-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .pie-legend {
      display: flex;
      gap: 1.7rem;
      padding-bottom: 3.5rem;
      padding-top: 4.1rem;

      .legend-description {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        p {
          font-size: ${FONTSIZES.small};
          font-weight: ${FONTWEIGHTS.normal};
        }
        &__donation {
          width: 1.6rem;
          height: 1.6rem;
          background: ${COLORS['uranian-blue']};
        }

        &__contacts {
          width: 1.6rem;
          height: 1.6rem;
          background: ${COLORS['turfts-blue']};
        }
      }
    }
  }
`;

const ContactsTrackerWrapper = styled(Card)`
  padding: 0.8rem 1.6rem 0 3.3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS['porcelain-white']};
`;

const ContactsTrackerHeaderWrapper = styled.div`
  padding-bottom: 1.2rem;
  margin-left: 0.8rem;
  flex: 0 auto;
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

export const MenuItems = styled.div`
  display: flex;
  flex: 0.6;
  gap: 1.6rem;

  .export-button {
    max-width: 14.4rem;
    width: 100%;
    height: 4.8rem;
    font-size: ${FONTSIZES.small};
    line-height: 16px;
    color: ${COLORS['grey-400']};
    background-color: ${COLORS.white};
    border: 1px solid #e2e6ff;
    padding: 1.2rem 1.2rem;
    justify-content: center;
    align-items: center;
  }
`;
