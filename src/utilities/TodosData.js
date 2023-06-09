export const columns = [
  {
    name: 'TO-do',
    selector: (row) => row.subject,
    width: '16.3rem'
  },

  {
    name: 'RELATED',
    selector: (row) => row.type,
    width: '15.1rem'
  },
  {
    name: 'Date',
    selector: (row) => row.date,
    width: '15.5rem'
  },

  {
    name: 'STATUS',
    selector: (row) => row.date,
    width: '15.5rem'
  }
];

export const data = [];
