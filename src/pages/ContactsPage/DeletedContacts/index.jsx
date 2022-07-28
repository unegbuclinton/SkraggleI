import Table from 'components/layouts/Table';
import React from 'react';

function DeletedContacts() {
  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      width: '10rem'
    },
    {
      name: 'DATE',
      selector: (row) => row.date,
      width: '10.7rem'
    },

    {
      name: 'NAME',
      selector: (row) => row.name,
      width: '26.4rem'
    },
    {
      name: 'PACKAGE',
      selector: (row) => row.package,
      width: '10.5rem'
    },
    {
      name: 'AMOUNT',
      selector: (row) => row.amount,
      width: '10.5rem'
    },

    {
      name: 'OPTED IN',
      selector: (row) => row.optedIn,
      width: '10.5rem'
    },

    {
      name: 'ATTENDING',
      selector: (row) => row.attending,
      width: '10.5rem'
    },

    {
      name: 'STATUS',
      selector: (row) => row.status,
      width: '10.5rem'
    },
    {
      name: '',
      cell: () => <p>Edit</p>,
      width: '8rem'
    }
  ];

  const data = [
    {
      id: 12345678,
      date: '12 / 8 / 2021',
      name: 'Mohammed Adam - Participant 1',
      package: 'Bag pack',
      amount: '$15.00',
      optedIn: 'No',
      attending: 'yes',
      status: 'Checked in'
    }
  ];

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default DeletedContacts;
