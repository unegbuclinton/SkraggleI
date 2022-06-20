import Table from 'components/layouts/Table';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import { DPIconDonationDash, DPIconDonationEye, DPIconDonationMore } from 'icons';
import React, { useState } from 'react';
import { ElementsWrapper } from './styles';

function ElementTable() {
  const columns = [
    {
      name: 'ID',
      selector: (row) => row?.id
    },
    {
      name: 'NAME',
      selector: (row) => row?.name
    },
    {
      name: 'TYPE',
      cell: (row) => <TypeComponent text={row.type} />
    },

    {
      name: 'CAMPAIGN',
      selector: (row) => row?.campaign
    },
    {
      name: '1M STATISTICS',
      cell: (row) => <StatisticComponent text={row.statistics} />
    },
    {
      name: 'LAST SEEN',
      selector: (row) => row?.last_seen,
      width: '120px'
    },
    {
      name: '',
      cell: () => <MoreComp />,
      width: '50px'
    }
  ];

  const data = [
    {
      id: 'XZ4345RFDC',
      name: 'Elements',
      type: 'null',
      campaign: 'statistics',
      statistics: '0',
      last_seen: '-'
    },
    {
      id: 'XZ4345RFDC',
      name: 'Elements',

      type: 'null',
      campaign: 'statistics',
      statistics: '0',
      last_seen: '-'
    },
    {
      id: 'XZ4345RFDC',
      name: 'Elements',
      statistics: '0',
      type: 'null',
      campaign: 'statistics',
      last_seen: '-'
    }
  ];
  return (
    <ElementsWrapper>
      <TableHeader header="12 Elements" />
      <Table columns={columns} data={data} />
    </ElementsWrapper>
  );
}

const TypeComponent = ({ text }) => {
  return (
    <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', cursor: 'pointer' }}>
      <DPIconDonationEye />
      <p>{text}</p>
    </div>
  );
};

const StatisticComponent = ({ text }) => {
  return (
    <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
      {text}
      <DPIconDonationDash />
      {text}
      <DPIconDonationDash />
      {text}
    </div>
  );
};

const MoreComp = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ position: 'relative', cursor: 'pointer' }}
      onClick={() => setOpen((prev) => !prev)}>
      <DPIconDonationMore />
      {open && (
        <div
          style={{
            position: 'absolute',
            left: '-10.7rem',
            width: '11.5rem',
            height: '6.8rem',
            boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.15);',
            borderRadius: '.5rem',
            border: '1px solid #E6EFF1',
            background: '#ffff',
            zIndex: '5'
          }}>
          <p style={{ padding: '1rem 1rem .2rem 1rem', color: '#9A9AA9' }}>Clone</p>
          <p style={{ padding: '1rem 1rem .2rem 1rem', color: '#9A9AA9' }}>Archive</p>
        </div>
      )}
    </div>
  );
};

export default ElementTable;
