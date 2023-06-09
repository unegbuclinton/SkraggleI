import dayjs from 'dayjs';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import store from 'store';

const today = new Date();
/* eslint-disable no-bitwise */
export function generateUUID() {
  let d = new Date().getTime();
  let d2 = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0; // Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export function formatDate(date) {
  return dayjs(date).format('DD MMM YYYY');
}
export function formatDateToInt(date) {
  return dayjs(date).format('YYYY-MM-DD');
}

export function formatNewDate(date) {
  return dayjs(date).format('yyyy-MM-dd');
}

export function nameAbbr(str) {
  const firstLetter = str
    .split(' ')
    .map((word) => word[0])
    .join('');

  return firstLetter;
}

export function isInThePast(date) {
  return date < today;
}

export const capitalizeFirstLowercaseRest = (str) => {
  return str?.charAt(0)?.toUpperCase() + str?.slice(1)?.toLowerCase();
};

export const getDatesBetweenDates = (startDate, endDate) => {
  let dates = [];
  //to avoid modifying the original date
  const theDate = new Date(startDate);
  while (theDate < endDate) {
    dates = [...dates, new Date(theDate)];
    theDate.setDate(theDate.getDate() + 1);
  }
  dates = [...dates, endDate];
  return dates;
};

export const renderCompToString = (comp) => {
  const renderedComp = renderToString(<Provider store={store}>{comp}</Provider>);

  return renderedComp;
};
