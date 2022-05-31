import CheckBox from 'components/atoms/CheckBox';
import TableBtn from 'components/atoms/TableButton/TableBtn';

export const columns = [
  {
    name: '',
    cell: () => <CheckBox />,
    width: '3rem'
  },
  {
    name: 'FULL NAME',
    selector: (row) => row.first_name,
    width: '16.8rem'
  },
  {
    name: 'PRIMARY EMAIL',
    selector: (row) => row.primary_email,
    width: '30.8rem'
  },
  {
    name: 'PRIMARY PHONE',
    selector: (row) => row.primary_phone,

    Width: '27.173rem'
  },
  {
    name: 'TAGS',
    cell: () => <TableBtn />
  }
];
