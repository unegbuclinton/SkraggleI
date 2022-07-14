import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconChevronDown } from 'icons';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatDate } from 'utilities/helpers';

function LeaderBoardTable() {
  const { leaderBoard } = useSelector((state) => state.report);
  const columns = [
    {
      name: '',
      selector: (row) => row.contact,
      cell: () => <Checkbox />,
      width: '3.069rem'
    },
    {
      name: 'RANK',
      selector: (row) => row.rank
    },
    {
      name: 'TOP PARTICIPANTS',
      selector: (row) => row.participants
    },
    {
      name: 'CAMPAIGN NAME',
      selector: (row) => row?.campaign?.name
    },
    {
      name: 'STATUS',
      selector: (row) => row.status
    },
    {
      name: 'AMOUNT',
      selector: (row) => row.amount
    },
    {
      name: 'DATE',
      selector: (row) => formatDate(row?.date_received)
    },
    {
      name: 'LOCATION',
      selector: (row) => row?.location
    }
  ];

  return (
    <TableWrapper>
      <TableHeader>
        <h1>Leaderboard</h1>
        <DPIconChevronDown />
      </TableHeader>
      <Table columns={columns} data={leaderBoard} />
    </TableWrapper>
  );
}

export default LeaderBoardTable;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: 4rem;
`;

export const TableHeader = styled.div`
  display: flex;
  background-color: ${COLORS.torquoise};
  justify-content: space-between;
  padding: 1.3rem 3.3rem 1.3rem 4.5rem;
  align-items: center;
  h1 {
    font-size: ${FONTSIZES.xsmall};
    font-weight: ${FONTWEIGHTS.normal};
    line-height: 14px;
    color: ${COLORS['grey-400']};
  }
`;
