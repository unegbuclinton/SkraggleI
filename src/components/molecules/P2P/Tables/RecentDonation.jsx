import { React } from 'react';

import { donationData } from 'utilities/p2pData';

import Table from 'components/layouts/Table';
import { ContainerBody, TableWrapper } from './styles';

const RecentDonation = () => {
  const columns = [
    {
      name: 'RANK',
      selector: (row) => row.rank,
      width: '10rem'
    },
    {
      name: 'CAMPAIGN',
      selector: (row) => row.participants,
      width: '20rem'
    },

    {
      name: 'FUNDRAISER',
      selector: (row) => row.name,
      width: '20rem'
    },
    {
      name: 'GOAL',
      selector: (row) => row.goals,
      width: '20rem'
    },
    {
      name: 'RAISED',
      selector: (row) => row.amount,
      width: '20rem'
    },
    {
      name: 'CREATED',
      selector: (row) => row.date,
      width: '20rem'
    },
    {
      name: 'GOAL DATE',
      selector: (row) => row.location,
      width: '20rem'
    }
  ];

  const tableData = donationData.map((P2PData, index) => ({
    key: index,
    rank: P2PData.rank,
    participants: P2PData.participants,
    name: P2PData.name,
    amount: P2PData.amount,
    date: P2PData.date,
    location: P2PData.location
  }));

  return (
    <div>
      <ContainerBody>
        <TableWrapper className="donations">
          <Table columns={columns} data={tableData} />
        </TableWrapper>
      </ContainerBody>
    </div>
  );
};

export default RecentDonation;
