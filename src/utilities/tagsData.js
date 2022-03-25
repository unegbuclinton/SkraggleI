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
      width: '34.5769rem',
    },
    {
      name: 'CREATED',
      selector: (row) => row.created,
      width: '58.9rem',
    },

  ];

  export const data = [
    {
      familyName: 'A Tag Name',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Tag Name',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Tag Name',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Tag Name',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Tag Name',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Tag Name',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Tag Name',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Tag Name',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Tag Name',
      created: '24th Aug, 2021',
    },
    
  ];