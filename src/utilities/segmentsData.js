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
      width: '32.2rem',
    },
    {
      name: 'CREATED',
      selector: (row) => row.created,
    },

  ];

  export const data = [
    {
      familyName: 'A Segment Name',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Segment Name',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Segment Name',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Segment Name',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Segment Name',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Segment Name',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Segment Name',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Segment Name',
      created: '24th Aug, 2021',
    },
    {
        familyName: 'A Segment Name',
      created: '24th Aug, 2021',
    },
    
  ];