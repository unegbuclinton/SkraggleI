import Card from 'components/atoms/Card';
import Checkbox from 'components/atoms/CheckBox';
import TableBtn from 'components/atoms/TableButton/TableBtn';
import Table from 'components/layouts/Table';
import TableHeader from 'components/molecules/TableHeader/TableHeader';
import React from 'react';
import styled from 'styled-components';

function DeletedContacts() {
  const columns = [
    {
      name: '',
      cell: () => <Checkbox />,
      width: '3rem'
    },
    {
      name: 'FULL NAME',
      selector: (row) => row.fullName,
      width: '16.8rem'
    },
    {
      name: 'PRIMARY EMAIL',
      selector: (row) => row.primaryEmail,
      width: '30.8rem'
    },
    {
      name: 'PRIMARY PHONE',
      selector: (row) => row.primaryPhone,

      Width: '27.173rem'
    },
    {
      name: 'TAGS',
      cell: () => <TableBtn />
    }
  ];

  const data = [
    {
      fullName: 'Mohammed Adam',
      primaryEmail: 'mohammed@gmail.com',
      primaryPhone: '+9994569220'
    },
    {
      fullName: 'Mohammed Adam',
      primaryEmail: 'mohammed@gmail.com',
      primaryPhone: '+9994569220'
    }
  ];

  return (
    <DeletedContactWrapper>
      <TableHeader header="2 Deleted Contact" disableFilterBtn />
      <Table columns={columns} data={data} />
    </DeletedContactWrapper>
  );
}

export default DeletedContacts;

const DeletedContactWrapper = styled(Card)`
  padding: 2.4rem;
  margin-top: 1.6rem;
`;
