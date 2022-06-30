import { React } from 'react';

import Table from 'components/layouts/Table';
import { useSelector } from 'react-redux';
import { formatDate } from 'utilities/helpers';
import { ContainerBody, TableWrapper } from './styles';

const TopParticipant = () => {
  const { rankedP2pData } = useSelector((state) => state.p2p);
  const columns = [
    {
      name: 'RANK',
      selector: (row) => row.sn,
      width: '10rem'
    },
    {
      name: 'CAMPAIGN',
      selector: (row) => row.campaign_id,
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
      selector: (row) => formatDate(row.created_at),
      width: '20rem'
    },
    {
      name: 'GOAL DATE',
      selector: (row) => row.location,
      width: '20rem'
    }
  ];

  return (
    <div>
      <ContainerBody>
        <TableWrapper className="donations">
          <Table columns={columns} data={rankedP2pData} />
        </TableWrapper>
      </ContainerBody>
    </div>
  );
};

export default TopParticipant;
