import Button from "components/atoms/Button/Button";
import CheckBox from "components/atoms/CheckBox/CheckBox";
import TableBtn from "components/atoms/TableButton/TableBtn";

export const columns = [
  {
    name: '',
    cell: () => (
      <CheckBox />
    ),
    width: '8rem',
  },
    {
      name: 'COMPANY NAME',
      selector: (row) => row.companyName,
      width: '40.2rem',
    },

    {
      name: 'PRIMARY PHONE',
      selector: (row) => row.primaryPhone,
      width: '40.2rem',
    },
    {
      name: 'TAGS',
      cell: () => (
       <TableBtn />
      ),
     width: '20.8rem',
    },

  ];

  export const data = [
    {
      companyName: 'Troy Barnes Sr.',
      primaryPhone: 2563256325,
    },
    {
        companyName: 'Troy Barnes Sr.',
      primaryPhone: 2563256325,
    },
    {
        companyName: 'Troy Barnes Sr.',
      primaryPhone: 2563256325,
    },
    {
        companyName: 'Troy Barnes Sr.',
      primaryPhone: 2563256325,
    },
    {
        companyName: 'Troy Barnes Sr.',
      primaryPhone: 2563256325,
    },
    {
        companyName: 'Troy Barnes Sr.',
      primaryPhone: 2563256325,
    },
    {
        companyName: 'Troy Barnes Sr.',
      primaryPhone: 2563256325,
    },
    {
        companyName: 'Troy Barnes Sr.',
      primaryPhone: 2563256325,
    },
    {
        companyName: 'Troy Barnes Sr.',
      primaryPhone: 2563256325,
    },
    
  ];