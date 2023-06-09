export const columns = [
  {
    name: 'DATE RECEIVED',
    selector: (row) => row.dateReceived,
    width: '17.1rem'
  },

  {
    name: 'TRANSACTION TYPE',
    selector: (row) => row.transactionType,
    width: '15.5rem'
  },
  {
    name: 'AMOUNT',
    selector: (row) => row.amounts
  },

  {
    name: 'STATUS',
    selector: (row) => row.status
  }
];

export const data = [];
