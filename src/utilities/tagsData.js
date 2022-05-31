import CheckBox from 'components/atoms/CheckBox';

export const columns = [
  {
    name: '',
    cell: () => <CheckBox />,
    width: '8rem'
  },
  {
    name: 'NAME',
    selector: (row) => row?.name,
    width: '33.5769rem'
  },
  {
    name: 'CREATED',
    selector: (row) => row?.created_at,
    width: '54.9rem'
  }
];
