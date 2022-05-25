export const columns = [
  {
    name: 'PLAN',
    selector: (row) => row.activityName,
    width: '10.8rem'
  },

  {
    name: 'START DATE',
    selector: (row) => row.startDate,
    width: '14.5rem'
  },
  {
    name: 'EXPIRATION DATE',
    selector: (row) => row.expirationDate
  },

  {
    name: 'FEE',
    selector: (row) => row.fee
  },

  {
    name: 'STATUS',
    selector: (row) => row.status
  }
];

export const data = [];
