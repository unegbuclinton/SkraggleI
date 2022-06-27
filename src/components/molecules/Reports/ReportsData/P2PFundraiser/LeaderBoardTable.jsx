import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import { DPIconChevronDown } from 'icons';
import React from 'react';
import styled from 'styled-components';

function LeaderBoardTable() {
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
      selector: (row) => row.name
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
      selector: (row) => row.date
    },
    {
      name: 'LOCATION',
      selector: (row) => row.location
    }
  ];

  const recurringData = [
    {
      rank: '1',
      participants: 'John Doe',
      name: 'BGA awesome campaign demo #1',
      amount: '$5000.00',
      date: 'Oct 10, 2021',
      location: 'NY'
    },
    {
      rank: '2',
      participants: 'John Doe',
      name: 'BGA awesome campaign demo #1',
      amount: '$5000.00',
      date: 'Oct 10, 2021',
      location: 'NY'
    },
    {
      rank: '3',
      participants: 'John Doe',
      name: 'BGA awesome campaign demo #1',
      amount: '$5000.00',
      date: 'Oct 10, 2021',
      location: 'NY'
    },
    {
      rank: '4',
      participants: 'John Doe',
      name: 'BGA awesome campaign demo #1',
      amount: '$5000.00',
      date: 'Oct 10, 2021',
      location: 'NY'
    },
    {
      rank: '5',
      participants: 'John Doe',
      name: 'BGA awesome campaign demo #1',
      amount: '$5000.00',
      date: 'Oct 10, 2021',
      location: 'NY'
    },
    {
      rank: '6',
      participants: 'John Doe',
      name: 'BGA awesome campaign demo #1',
      amount: '$5000.00',
      date: 'Oct 10, 2021',
      location: 'NY'
    },
    {
      rank: '7',
      participants: 'John Doe',
      name: 'BGA awesome campaign demo #1',
      amount: '$5000.00',
      date: 'Oct 10, 2021',
      location: 'NY'
    }
  ];

  return (
    <TableWrapper>
      <TableHeader>
        <h1>Leaderboard</h1>
        <DPIconChevronDown />
      </TableHeader>
      <Table columns={columns} data={recurringData} />
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
