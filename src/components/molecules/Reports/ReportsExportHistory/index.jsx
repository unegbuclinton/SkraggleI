import Checkbox from 'components/atoms/CheckBox';
import Table from 'components/layouts/Table';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

function ReportsExportHistory() {
  const columns = [
    {
      name: '',
      cell: () => <Checkbox />,
      width: '3.069rem'
    },
    {
      name: 'DATE',
      selector: (row) => row.date,
      width: '30.725rem'
    },
    {
      name: 'REPORT',
      selector: (row) => row.name,
      width: '30.766rem'
    }
  ];

  const recurringData = [
    {
      id: 1,
      date: 'Oct 10, 2021',
      name: 'Transection report'
    },
    {
      id: 2,
      date: 'Oct 10, 2021',
      name: 'Transection report'
    },
    {
      id: 3,
      date: 'Oct 10, 2021',
      name: 'Transection report'
    },
    {
      id: 4,
      date: 'Oct 10, 2021',
      name: 'Transection report'
    },
    {
      id: 5,
      date: 'Oct 10, 2021',
      name: 'Transection report'
    },
    {
      id: 6,
      date: 'Oct 10, 2021',
      name: 'Transection report'
    }
  ];

  return (
    <TableWrapper>
      <Table columns={columns} data={recurringData} />
    </TableWrapper>
  );
}

export default ReportsExportHistory;

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
