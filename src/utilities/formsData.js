import CheckBox from 'components/atoms/CheckBox';
import TableBtn from 'components/atoms/TableButton/TableBtn';

export const columns = [
  {
    name: '',
    cell: () => <CheckBox />,
    width: '8rem'
  },

  {
    name: 'FORM NAME',
    selector: (row) => row.formName,
    width: '23.769rem'
  },

  {
    name: 'FORM TYPE',
    selector: (row) => row.formType,
    width: '13.769rem'
  },

  {
    name: 'RAISED',
    selector: (row) => row.raised
  },

  {
    name: 'DONATIONS',
    selector: (row) => row.donation,
    width: '25.027rem'
  },

  {
    name: 'STATUS',
    cell: () => <TableBtn active />,
    width: '30.8rem'
  }
];

export const data = [
  {
    formName: 'My Awesome Form',
    formType: 'Donation',
    raised: '$0.00',
    donation: 65
  },

  {
    formName: 'My Awesome Form',
    formType: 'Donation',
    raised: '$0.00',
    donation: 65
  },

  {
    formName: 'My Awesome Form',
    formType: 'Donation',
    raised: '$0.00',
    donation: 65
  },

  {
    formName: 'My Awesome Form',
    formType: 'Donation',
    raised: '$0.00',
    donation: 65
  },

  {
    formName: 'My Awesome Form',
    formType: 'Donation',
    raised: '$0.00',
    donation: 65
  },

  {
    formName: 'My Awesome Form',
    formType: 'Donation',
    raised: '$0.00',
    donation: 65
  }
];
