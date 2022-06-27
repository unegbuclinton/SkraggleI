import Button from 'components/atoms/Button/Button';
import CalendarDropdown from 'components/atoms/CalendarDropdown';
import Card from 'components/atoms/Card';
import DropdownComponent from 'components/atoms/Dropdown';
import SelectDropDown from 'components/atoms/GenericDropdown';
import DonorScore from 'components/molecules/DonorScore';
import AreaChart from 'components/organisms/AreaChart';
import PieChart from 'components/organisms/PieChart';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';
import data from 'utilities/filterData.json';

function Transaction() {
  const [selected, setSelected] = useState('Filters');

  const campaign = [
    { value: 'Fateh', label: 'Fateh' },
    { value: 'Agboola', label: 'Agboola' }
  ];

  const donationType = [
    { value: 'Fateh', label: 'Fateh' },
    { value: 'Agboola', label: 'Agboola' }
  ];

  const series = [
    {
      name: 'Skraggle',
      data: ['0k', '10k', '15k', '20k', '22k', '30k', '40k', '35k', '40k', '50k', '40k', '55k'],
      color: '#2FC18D'
    }
  ];

  const [openRange, setOpenRange] = useState(false);
  const toggleRange = () => setOpenRange((prev) => !prev);
  const [filterRange, setFilterRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    label: 'Today'
  });
  const handleSetRange = (range) => setFilterRange(range);
  return (
    <TransactionWrapper>
      <TransactionHeader>
        <h1>Transaction</h1>
        <MenuItems>
          <Button className="export-button">Export</Button>
          <SelectDropDown
            placeholder={'Campaign'}
            id="campaignName"
            name="campaignName"
            type={'text'}
            className="dropdown"
            options={campaign}
            onChange={(value) => value.value}
          />
          <SelectDropDown
            placeholder={'Donation Type'}
            id="campaignName"
            name="campaignName"
            type={'text'}
            options={donationType}
            className="dropdown"
            onChange={(value) => value.value}
          />
          <CalendarDropdown
            label={filterRange?.label}
            toggleRange={toggleRange}
            setRange={handleSetRange}
            open={openRange}
          />
        </MenuItems>
      </TransactionHeader>
      <DonationTrackerWrapper>
        <DonationTrackerHeaderWrapper>
          <span></span>
        </DonationTrackerHeaderWrapper>

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
      </DonationTrackerWrapper>
      <TypeWrapper>
        <div className="transaction">
          <Card className="card-wrapper">
            <TypeHeader>
              <p className="transaction-text">Transaction Types</p>
              <DropdownComponent selected={selected} setSelected={setSelected} data={data} />
            </TypeHeader>

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
          </Card>
        </div>
        <div className="donor-score">
          <Card>
            <div className="bar-container">
              <DonorScore text="Donor Scores" />
            </div>
          </Card>
        </div>
      </TypeWrapper>
    </TransactionWrapper>
  );
}

export default Transaction;

export const TransactionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.4rem 1.8rem 2.4rem 1.8rem;
  border: 1px solid ${COLORS['porcelain-white']};
`;

export const TransactionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 3.4rem 2.4rem 3.4rem;
`;

const DonationTrackerWrapper = styled(Card)`
  padding: 0.8rem 1.6rem 0 3.3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const DonationTrackerHeaderWrapper = styled.div`
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
const TypeWrapper = styled.div`
  margin: 1.6rem 0;
  margin-top: 7.8rem;
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 1.2rem;

  .card-wrapper {
    padding: 0rem 1.6rem 0rem 1.6rem;
  }

  .transaction {
    width: 100%;
    height: fit-content;
    border: 1px solid ${COLORS['porcelain-white']};
    padding: 0.8rem 1.6rem 0.4rem 1.6rem;
  }

  .donor-score {
    width: 100%;
    height: fit-content;
    border: 1px solid ${COLORS['porcelain-white']};
  }

  .bar-container,
  .pie-container {
    display: flex;
    justify-content: center;
  }
  .pie-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid ${COLORS.torquoise};
    margin-top: 0.6rem;

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

const TypeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .transaction-text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS.deepPurple};
  }

  .donor-text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS.deepPurple};
    width: 100%;
    margin: 0.8rem 5.6rem 0 4.1rem;
    border-bottom: 1px solid ${COLORS.torquoise};
    padding-bottom: 1.6rem;
  }

  .donor-label {
    display: flex;
    gap: 1rem;
    &__wrapper {
      font-size: ${FONTSIZES.xsmall};
      color: ${COLORS['blue-black']};
      display: flex;
      justify-content: baseline;
      gap: 0.8rem;
    }
    &__highest {
      width: 1.6rem;
      height: 1.6rem;
      background-color: #9fff97;
      justify-content: baseline;
    }
    &__medium {
      width: 1.6rem;
      height: 1.6rem;
      background-color: #ffe768;
      justify-content: baseline;
    }
    &__lowest {
      width: 1.6rem;
      height: 1.6rem;
      background-color: #ff576b;
      justify-content: baseline;
    }
  }
`;

export const MenuItems = styled.div`
  display: flex;
  gap: 1.6rem;
  flex: 0.6;
  justify-content: right;

  .export-button {
    max-width: 14.4rem;
    width: 100%;
    height: 4.8rem;
    font-size: ${FONTSIZES.small};
    line-height: 16px;
    color: ${COLORS['grey-400']};
    background-color: ${COLORS.white};
    border: 1px solid ${COLORS.pink};
    padding: 1.2rem 1.2rem;
    justify-content: center;
    align-items: center;
  }

  .dropdown {
    max-width: 14.4rem;
  }
`;
