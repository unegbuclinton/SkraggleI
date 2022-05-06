export const columns = [
  {
    name: '',
    cell: () => (
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
          width: '100%'
        }}
      >
        <input type="checkbox" />
      </div>
    ),
    width: '8rem'
  },
  {
    name: 'First Name',
    selector: (row) => row.firstName
  },
  {
    name: 'Last Name',
    selector: (row) => row.lastName,
    width: 200
  },
  {
    name: 'Age',
    selector: (row) => row.age
  },
  {
    name: 'Visits',
    selector: (row) => row.visits
  },
  {
    name: 'Progress',
    selector: (row) => row.progress
  },
  {
    name: 'Status',
    selector: (row) => row.status
  }
];

export const data = [
  {
    firstName: 'collection',
    lastName: 'riddle',
    age: 7,
    visits: 24,
    progress: 91,
    status: 'single'
  },
  {
    firstName: 'youth',
    lastName: 'history',
    age: 4,
    visits: 48,
    progress: 65,
    status: 'single'
  },
  {
    firstName: 'pleasure',
    lastName: 'painting',
    age: 6,
    visits: 88,
    progress: 91,
    status: 'relationship'
  },
  {
    firstName: 'acoustics',
    lastName: 'growth',
    age: 1,
    visits: 74,
    progress: 74,
    status: 'relationship'
  },
  {
    firstName: 'box',
    lastName: 'cattle',
    age: 16,
    visits: 4,
    progress: 33,
    status: 'relationship'
  },
  {
    firstName: 'unit',
    lastName: 'afternoon',
    age: 12,
    visits: 26,
    progress: 72,
    status: 'single'
  },
  {
    firstName: 'satisfaction',
    lastName: 'sneeze',
    age: 25,
    visits: 49,
    progress: 82,
    status: 'relationship'
  },
  {
    firstName: 'grandfather',
    lastName: 'kite',
    age: 9,
    visits: 98,
    progress: 19,
    status: 'complicated'
  },
  {
    firstName: 'taste',
    lastName: 'pain',
    age: 23,
    visits: 22,
    progress: 10,
    status: 'complicated'
  },
  {
    firstName: 'downtown',
    lastName: 'water',
    age: 29,
    visits: 50,
    progress: 69,
    status: 'relationship'
  },
  {
    firstName: 'collection',
    lastName: 'riddle',
    age: 7,
    visits: 24,
    progress: 91,
    status: 'single'
  },
  {
    firstName: 'youth',
    lastName: 'history',
    age: 4,
    visits: 48,
    progress: 65,
    status: 'single'
  },
  {
    firstName: 'pleasure',
    lastName: 'painting',
    age: 6,
    visits: 88,
    progress: 91,
    status: 'relationship'
  },
  {
    firstName: 'acoustics',
    lastName: 'growth',
    age: 1,
    visits: 74,
    progress: 74,
    status: 'relationship'
  },
  {
    firstName: 'box',
    lastName: 'cattle',
    age: 16,
    visits: 4,
    progress: 33,
    status: 'relationship'
  },
  {
    firstName: 'unit',
    lastName: 'afternoon',
    age: 12,
    visits: 26,
    progress: 72,
    status: 'single'
  },
  {
    firstName: 'satisfaction',
    lastName: 'sneeze',
    age: 25,
    visits: 49,
    progress: 82,
    status: 'relationship'
  },
  {
    firstName: 'grandfather',
    lastName: 'kite',
    age: 9,
    visits: 98,
    progress: 19,
    status: 'complicated'
  },
  {
    firstName: 'taste',
    lastName: 'pain',
    age: 23,
    visits: 22,
    progress: 10,
    status: 'complicated'
  },
  {
    firstName: 'downtown',
    lastName: 'water',
    age: 29,
    visits: 50,
    progress: 69,
    status: 'relationship'
  }
];
