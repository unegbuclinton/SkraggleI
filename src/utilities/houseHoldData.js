import CheckBox from "components/atoms/CheckBox/CheckBox";

export const columns = [
  {
    name: '',
    cell: () => (
      <CheckBox />
    ),
    width: '8rem',
  },
    {
      name: 'NAME',
      selector: (row) => row.familyName,
      width: '33.5769rem',
    },
    {
      name: 'CREATED',
      selector: (row) => row.created,
      width: '54.9rem',
    },

  ];

  export const data = [
    {
      familyName: 'A Family Name.',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Family Name.',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Family Name.',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Family Name.',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Family Name.',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Family Name.',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Family Name.',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Family Name.',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Family Name.',
      created: '24th Aug, 2021',
    },
    
  ];