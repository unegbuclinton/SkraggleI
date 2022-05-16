import CheckBox from 'components/atoms/CheckBox';
import dayjs from 'dayjs';

export const columns = [
  {
    name: '',
    cell: () => <CheckBox />,
    width: '8rem'
  },
  {
    name: 'NAME',
    selector: (row) => {
      return row?.name;
    },
    width: '33.5769rem'
  },
  {
    name: 'CREATED',
    selector: (row) => {
      return dayjs(row?.created_on).format('MMM DD YYYY');
    },
    width: '54.9rem'
  }
];
