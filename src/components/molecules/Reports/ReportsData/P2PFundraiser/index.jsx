import Button from 'components/atoms/Button/Button';
import CalendarDropdown from 'components/atoms/CalendarDropdown';
import { COLORS } from 'constants/colors';
import { FONTSIZES } from 'constants/font-spec';
import React, { useState } from 'react';
import styled from 'styled-components';
import LeaderBoardTable from './LeaderBoardTable';

function P2PFundraiser() {
  const [openRange, setOpenRange] = useState(false);
  const toggleRange = () => setOpenRange((prev) => !prev);
  const [filterRange, setFilterRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    label: 'Today'
  });
  const handleSetRange = (range) => setFilterRange(range);
  return (
    <P2PFundraiserWrapper>
      <P2PFundraiserHeader>
        <h1>P2P Fundraiser</h1>
        <MenuItems>
          <Button className="export-button">Export</Button>
          <CalendarDropdown
            label={filterRange?.label}
            toggleRange={toggleRange}
            setRange={handleSetRange}
            open={openRange}
          />
          <CalendarDropdown
            label={filterRange?.label}
            toggleRange={toggleRange}
            setRange={handleSetRange}
            open={openRange}
          />
        </MenuItems>
      </P2PFundraiserHeader>
      <LeaderBoardTable />
    </P2PFundraiserWrapper>
  );
}

export default P2PFundraiser;

export const P2PFundraiserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.4rem 1.8rem 2.4rem 1.8rem;
  border: 1px solid ${COLORS['porcelain-white']};
  margin-top: 2.4rem;
`;

export const P2PFundraiserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 3.4rem 2.4rem 0rem;
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
`;
