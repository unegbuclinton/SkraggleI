import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card';
import Table from 'components/layouts/Table';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React from 'react';
import styled from 'styled-components';
function Imports() {
  const columns = [
    {
      name: 'NAME',
      selector: (row) => row.name,
      width: '20rem'
    },

    {
      name: 'DATA TYPE',
      selector: (row) => row.dataType,
      width: '30rem'
    },

    {
      name: 'CREATED',
      selector: (row) => row.created,
      width: '30rem'
    },

    {
      name: 'STATUS',
      cell: () => (
        <IconWrapper>
          <Button pill success className="mail-btn">
            Active
          </Button>
        </IconWrapper>
      )
    }
  ];

  const data = [
    {
      name: 'Sandbox',
      dataType: 'Acknowledgement & Thank You',
      created: 'Feb 2, 2020'
    },

    {
      name: 'Sandbox',
      dataType: 'Acknowledgement & Thank You',
      created: 'Feb 2, 2020'
    },

    {
      name: 'Sandbox',
      dataType: 'Acknowledgement & Thank You',
      created: 'Feb 2, 2020'
    },
    {
      name: 'Sandbox',
      dataType: 'Acknowledgement & Thank You',
      created: 'Feb 2, 2020'
    }
  ];
  return (
    <ImportsWrapper>
      <TableHeader header="2 Imported Files" title="New Import" />
      <Table columns={columns} data={data} />
    </ImportsWrapper>
  );
}

export default Imports;

const ImportsWrapper = styled(Card)`
  padding: 1.6rem 2.4rem 2.4rem 2.4rem;
  .mail-btn {
    width: 9.173rem;
    height: 3rem;
    text-align: center;
    position: relative;
    right: 2rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
