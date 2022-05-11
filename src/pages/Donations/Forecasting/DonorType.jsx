import Card from 'components/atoms/Card';
import DropdownComponent from 'components/atoms/Dropdown';
import BarChart from 'components/organisms/BarChart';
import PieChart from 'components/organisms/PieChart';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';
import data from 'utilities/filterData.json';

function DonorType() {
  const [selected, setSelected] = useState('Filters');
  const series = [
    {
      name: 'Skraggle',
      data: [39, 30, 35, 25, 40, 15]
    }
  ];

  return (
    <TypeWrapper>
      <div className="transaction">
        <Card>
          <TypeHeader>
            <p className="transaction-text">2021 Transaction Types</p>
            <DropdownComponent selected={selected} setSelected={setSelected} data={data} />
          </TypeHeader>

          <div className="pie-container">
            <PieChart height={300} />
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
            <BarChart series={series} categories={['30', '40', '60']} height={360} />
          </div>
        </Card>
      </div>
    </TypeWrapper>
  );
}

export default DonorType;

const TypeWrapper = styled.div`
  margin: 1.6rem 0;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1.2rem;

  .transaction {
    width: 100%;
    flex: 1;
  }

  .donor-score {
    width: 100%;
    flex: 1;
  }

  .pie-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 5.6rem 0 4rem;

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
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 4.1rem 1.2rem 0;
  margin-left: 4.1rem;

  &::after {
    content: '';
    position: absolute;
    width: calc(100% - 3.1rem);
    background: ${COLORS.torquoise};
    height: 1px;
    bottom: 0;
    left: 0;
  }

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
    padding-top: 2.4rem;
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
