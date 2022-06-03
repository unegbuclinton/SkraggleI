import { formatDate } from './helpers';

export const columns = [
  {
    name: 'NAME',
    selector: (row) => row?.name,
    width: '33.5769rem'
  },
  {
    name: 'CREATED',
    selector: (row) => formatDate(row?.created_at),
    width: '54.9rem'
  }
];
