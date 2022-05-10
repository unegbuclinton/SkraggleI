import Card from 'components/atoms/Card';
import Table from 'components/layouts/Table';
import { COLORS } from 'constants/colors';
import { FONTSIZES, FONTWEIGHTS } from 'constants/font-spec';
import React from 'react';
import styled from 'styled-components';

const columns = [
  {
    name: '',
    cell: () => <input style={{ margin: '0 auto' }} type="checkbox" />,
    width: '7.8rem'
  },
  {
    name: 'CONTACT',
    selector: (row) => row.fullName,
    width: '19.695rem'
  },
  {
    name: 'AMOUNT',
    selector: (row) => row.amount,
    width: '26.366rem'
  },
  {
    name: 'DATE',
    selector: (row) => row.created,
    width: '26.366rem'
  },
  {
    name: 'TYPE',
    selector: (row) => row.type
  }
];

const data = [
  {
    id: 1,
    fullName: 'Mohammed Adam',
    amount: '$500',
    type: 'Gift',
    created: '24th Aug',
    action: ''
  },
  {
    id: 2,
    fullName: 'Mohammed Adam',
    amount: '$500',
    type: 'Gift',
    created: '24th Aug',
    action: ''
  }
];

const RecentTransactions = () => {
  return (
    <RecentTransactionsWrapper>
      <RecentTransactionsHeader>Recent Transactions</RecentTransactionsHeader>
      <Table columns={columns} data={data} />
    </RecentTransactionsWrapper>
  );
};

export default RecentTransactions;

const RecentTransactionsWrapper = styled(Card)`
  padding: 0 2.4rem 3.3rem;
  flex: 1;
  margin-bottom: 4rem;
`;

const RecentTransactionsHeader = styled.div`
  padding: 2.4rem 0 1.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: ${FONTSIZES.lg};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS['header-grey']};
  margin-bottom: 1.6rem;

  &:after {
    content: '';
    position: absolute;
    background: ${COLORS.torquoise};
    height: 1px;
    width: calc(100% - 3.1rem);
    bottom: 0;
    left: 0;
  }
`;
