import React from 'react';
import styled from 'styled-components';
import Table from 'components/layouts/Table';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import Card from 'components/atoms/Card';

function RecentTransaction() {
  const columns = [
    {
      name: '',
      selector: (row) => row.contact,
      cell: (row) => <input type="checkbox" />,
      width: '3.069rem'
    },
    {
      name: 'Contact',
      selector: (row) => row.contact,
      width: '20.725rem'
    },
    {
      name: 'Amount',
      selector: (row) => row.amount,
      width: '20.766rem'
    },
    {
      name: 'Date',
      selector: (row) => row.date,
      width: '25.494rem'
    },
    {
      name: 'Type',
      selector: (row) => row.type
    }
  ];

  const data = [
    {
      id: 1,
      contact: 'Mohammed Adam',
      amount: '$500.00',
      date: '24th Aug',
      type: 'Gift'
    },
    {
      id: 2,
      contact: 'Mohammed Adam',
      amount: '$500.00',
      date: '24th Aug',
      type: 'Gift'
    }
  ];

  return (
    <RecentWrapper>
      <Card>
        <p className="recent-header__text">Recent Transactions</p>
        <div className="table-container">
          <Table data={data} columns={columns} />
        </div>
      </Card>
    </RecentWrapper>
  );
}

export default RecentTransaction;

const RecentWrapper = styled.div`
  margin-bottom: 1.6rem;

  .recent-header__text {
    font-size: ${FONTSIZES.lg};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS['header-grey']};
    margin: 0rem 3.9rem 0 3.6rem;
    padding: 2.4rem 0rem 1.7rem 0rem;
    border-bottom: 1px solid ${COLORS.torquoise};
  }

  .table-container {
    padding: 1.6rem 2.4rem 4.2rem 2.4rem;

    .rtd_ {
      &TableCol {
        padding-left: 3.4rem;
      }
    }
  }
`;
