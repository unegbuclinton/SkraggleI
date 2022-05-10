import dayjs from 'dayjs';
const today = dayjs();
const subtractDate = (value, valueString) => today.subtract(value, valueString);
const ranges = [
  {
    label: 'Today',
    startDate: today,
    endDate: today
  },
  {
    label: 'Yesterday',
    startDate: subtractDate(1, 'days'),
    endDate: subtractDate(1, 'days')
  },
  {
    label: 'Last 7 Days',
    startDate: subtractDate(6, 'days'),
    endDate: today
  },
  {
    label: 'Last 14 Days',
    startDate: subtractDate(13, 'days'),
    endDate: today
  },
  {
    label: 'Last 30 Days',
    startDate: subtractDate(29, 'days'),
    endDate: today
  },
  {
    label: 'This Week',
    startDate: today.startOf('week'),
    endDate: today.endOf('week')
  },
  {
    label: 'This Month',
    startDate: today.startOf('month'),
    endDate: today.endOf('month')
  },
  {
    label: 'This Year',
    startDate: today.startOf('year'),
    endDate: today.endOf('year')
  }
];

export default ranges;
