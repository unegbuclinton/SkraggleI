import Table from 'components/layouts/Table';
import React from 'react';
import RightRowData from '../tableRow/RightRowData';
import TableRowLeft from '../tableRow/TableRowLeft';
import { WordingHeader, WordingWrapper } from './styles';

function BillinInfomation() {
  const columns = [
    {
      name: 'ORIGINAL',
      selector: (row) => row.original,
      cell: () => <TableRowLeft leftText="Company Donation" />,
      width: '57rem'
    },

    {
      name: 'CUSTOM',
      selector: (row) => row.custom,
      cell: () => <RightRowData />
    }
  ];
  const data = [
    {
      original: '',
      custom: ''
    }
  ];
  return (
    <WordingWrapper>
      <WordingHeader>
        <h1 className="heading">Personal and billing information</h1>
      </WordingHeader>
      <Table className="wording-table" columns={columns} data={data} />
    </WordingWrapper>
  );
}

export default BillinInfomation;
